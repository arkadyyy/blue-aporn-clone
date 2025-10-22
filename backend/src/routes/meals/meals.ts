import { Router } from "express";
import { getAllMeals } from "../../controllers/meals/index.js";

const router = Router();

router.get("/", getAllMeals);

export default router;
