import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import usersRoutes from "./routes/users/users.js";
import mealsRoutes from "./routes/meals/meals.js";
import { scrapeMealsLive } from "./scrape.js";
import { Request, Response } from "express";
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "blue apron api",
  });
});

app.use("/api/users", usersRoutes);
app.use("/api/meals", mealsRoutes);

type MealsCache = { at: number; data: any };
let cache: { at: number; data: any } | null = null;
const CACHE_MS = 10 * 60 * 1000; // 10 minutes
function getValidCache(now = Date.now()): MealsCache | null {
  if (cache && now - cache.at < CACHE_MS) return cache;
  return null;
}

app.get("/api/meals_origin", async (req: Request, res: Response) => {
  try {
    const force = req.query.refresh === "1";
    const cached = !force ? getValidCache() : null;
    if (cached) {
      return res.json(cached.data);
    }
    const url = (req.query.url as string) || "https://www.blueapron.com/";
    const data = await scrapeMealsLive(url);
    res.json(data);
  } catch (err: any) {
    console.error("scrape error:", err?.message || err);
    res.status(500).json({
      error: "scrape_failed",
      message: err?.message || "unknown error",
    });
  }
});

// not found handler
app.use(notFound);
// error handler
app.use(errorHandler);

export default app;
