import express, { type Request, type Response } from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("shalom");
});

// Start server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
