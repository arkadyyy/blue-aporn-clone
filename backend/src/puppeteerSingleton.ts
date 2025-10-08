import puppeteer, { Browser } from "puppeteer";

let browserPromise: Promise<Browser> | null = null;

export function getBrowser() {
  if (!browserPromise) {
    browserPromise = puppeteer.launch({ headless: true });
  }
  return browserPromise;
}

export async function closeBrowser() {
  if (browserPromise) {
    const b = await browserPromise;
    await b.close();
    browserPromise = null;
  }
}
