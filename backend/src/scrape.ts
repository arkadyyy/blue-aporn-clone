import * as cheerio from 'cheerio';
import { getBrowser } from "./puppeteerSingleton.js";

type Category = { id?: string; name?: string; description?: string; last_cycle_start_date?: string };
type Meal = {
  category?: string | null;
  category_description?: string | null;
  id?: string | null;
  name: string;
  subtitle?: string | null;
  product_line?: string | null;
  image?: string | null;
  thumbnail?: string | null;
  price?: number | null;
  formatted_price?: string | null;
  pricing_type?: string | null;
  min_cook_time?: number | null;
  max_cook_time?: number | null;
  average_cook_time?: number | null;
  description?: string;
  protein_types?: string[] | null;
  cuisine_type?: string | null;
  diet_codes?: string[] | null;
  badges?: { primary: string | null; secondary: string[] };
  servings_display?: string | null;
  can_choose_servings?: boolean | null;
  tags?: string[];
};

const get = (obj: any, ...keys: string[]) =>
  keys.reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), obj);

function extractFromEmbeddedData(html: string) {
  const re = /window\["__RQ.*?\]\.push\(\s*(\{.*?\})\s*\);/gs;
  const pushes: any[] = [];
  for (const m of html.matchAll(re)) {
    try { pushes.push(JSON.parse(m[1])); } catch {}
  }
  if (!pushes.length) return null;

  const categories: Category[] = [];
  const meals: Meal[] = [];

  for (const push of pushes) {
    const queries = push?.queries || [];
    for (const q of queries) {
      const data = q?.state?.data;
      const jumpLinks = data?.jump_links;
      if (!Array.isArray(jumpLinks)) continue;

      for (const jl of jumpLinks) {
        categories.push({
          id: jl?.id,
          name: jl?.name,
          description: jl?.description,
          last_cycle_start_date: jl?.last_cycle_start_date,
        });
        for (const p of jl?.products || []) {
          meals.push({
            category: jl?.name ?? null,
            category_description: jl?.description ?? null,
            id: p?.id ?? null,
            name: p?.name ?? '',
            subtitle: p?.subtitle ?? null,
            product_line: p?.product_line ?? null,
            image: get(p, 'featured_image', 'image_url') || get(p, 'thumbnail_image', 'image_url') || null,
            thumbnail: get(p, 'thumbnail_image', 'image_url') || null,
            price: p?.price ?? null,
            formatted_price: p?.formatted_price ?? null,
            pricing_type: p?.pricing_type ?? null,
            min_cook_time: p?.min_cook_time ?? null,
            max_cook_time: p?.max_cook_time ?? null,
            average_cook_time: p?.average_cook_time ?? null,
            description: p?.description ?? '',
            protein_types: p?.protein_types ?? null,
            cuisine_type: p?.cuisine_type ?? null,
            diet_codes: p?.diet_codes ?? null,
            badges: {
              primary: get(p, 'badge', 'primary_badge', 'name') ?? null,
              secondary: (get(p, 'badge', 'secondary_badges') || []).map((b: any) => b?.name).filter(Boolean),
            },
            servings_display: p?.servings_display ?? null,
            can_choose_servings: p?.can_choose_servings ?? null,
          });
        }
      }
    }
  }

  const seen = new Set<string>();
  const uniqCategories = categories.filter(c => {
    if (!c?.id) return true;
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });

  if (!meals.length) return null;
  return { categories: uniqCategories, meals };
}

function extractWithSelectors(html: string) {
  const $ = cheerio.load(html);
  const itemSel = 'section[aria-label] ul > li, li';
  const titleSel = 'img[alt]';
  const imageSel = 'img[src]';
  const descSel = '[data-testid="meal-description"], .desc, p';
  const tagSel = '[data-tag], .tag';

  const meals: Meal[] = $(itemSel)
    .map((_, el) => {
      const li = $(el);
      const title = li.find(titleSel).attr('alt')?.trim() || '';
      const image = li.find(imageSel).attr('src') || '';
      const description = li.find(descSel).first().text().trim();
      const tags = li.find(tagSel).map((_, t) => $(t).text().trim()).get().filter(Boolean);

      if (!title && !image && !description && tags.length === 0) return null;
      return {
        name: title || '(untitled)',
        image: image || null,
        thumbnail: image || null,
        description,
        tags,
        badges: { primary: null, secondary: [] },
      } as Meal;
    })
    .get()
    .filter(Boolean) as Meal[];

  if (!meals.length) return null;
  return { categories: [], meals };
}

export async function scrapeMealsLive(url: string) {
  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    await page.setUserAgent("Mozilla/5.0 ... Chrome/120 Safari/537.36");
    await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
    await page.setViewport({ width: 1366, height: 768 });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
    const html = await page.content();

    return extractFromEmbeddedData(html) || extractWithSelectors(html);
  } finally {
    await page.close(); 
  }
}