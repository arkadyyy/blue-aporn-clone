import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import usersRoutes from "./routes/users/users.js";
import mealsRoutes from "./routes/meals/meals.js";
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

// not found handler
app.use(notFound);
// error handler
app.use(errorHandler);

export default app;
