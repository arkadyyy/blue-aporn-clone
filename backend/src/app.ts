import express, { type Request, type Response } from "express";
import "dotenv/config";
import { scrapeMealsLive } from "./scrape.js";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("shalom");
});

type MealsCache = { at: number; data: any };
let cache: { at: number; data: any } | null = null;
const CACHE_MS = 10 * 60 * 1000; // 10 minutes
function getValidCache(now = Date.now()): MealsCache | null {
  if (cache && now - cache.at < CACHE_MS) return cache;
  return null;
}

app.get("/api/meals", async (req: Request, res: Response) => {
  try {
       const force = req.query.refresh === "1";
     const cached = !force ? getValidCache() : null;
    if (cached) {
      return res.json(cached.data);
    }
    const url = (req.query.url as string) || 'https://www.blueapron.com/';
    const data = await scrapeMealsLive(url);
    res.json(data);
  } catch (err: any) {
    console.error('scrape error:', err?.message || err);
    res.status(500).json({ error: 'scrape_failed', message: err?.message || 'unknown error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
``;
