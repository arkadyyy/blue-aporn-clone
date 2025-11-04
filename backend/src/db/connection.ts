import pg from "pg";
import { createClient } from "redis";
import morgan from "morgan";
// postgres connection
const { Pool } = pg;

const pool = new Pool({
  user: "user",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "blue_apron",
});

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("## Connected to Postgres:", res.rows[0]);
  } catch (err) {
    console.error("Error connecting to Postgres:", err.message);
    process.exit(1);
  }
}
testConnection();
export const query = (text: string, params?: any[]) => pool.query(text, params);

// redis connection
export const redisClient = createClient();

redisClient
  .connect()
  .then(async () => {
    const pong = await redisClient.ping();
    console.log("## Redis connected successfully:", pong);
  })
  .catch((err) => {
    console.error("## Redis connection error:", err);
  });
