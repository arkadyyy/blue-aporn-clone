import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "user",
  password: "secretpassword",
  host: "database.server.com",
  port: 3211,
  database: "mydb",
});

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Connected to Postgres:", res.rows[0]);
  } catch (err) {
    console.error("Error connecting to Postgres:", err.message);
    process.exit(1);
  }
}

testConnection();
export default pool;
