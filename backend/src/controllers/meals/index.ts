import { Request, Response, NextFunction } from "express";
import { query } from "../../db/connection.js";
import queries from "./queries.js";

export async function getAllMeals(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // TODO - switch to inner join meals_ingredients
  const { rows } = await query(queries.getAllMeals);

  res.json({ rows });
}
export async function getFullMealData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("req.query : ", req.params);
  const { meal_id } = req.params;
  console.log("meal_id : ", meal_id);
  const { rows } = await query(queries.getMeal, [meal_id]);
  res.json({ rows });
}
