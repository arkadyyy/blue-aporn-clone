import { Router } from "express";
import { getAllMeals, getFullMealData } from "../../controllers/meals/index.js";

const router = Router();

router.get("/", getAllMeals);
router.get("/:meal_id", getFullMealData);

export default router;
