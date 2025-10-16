import { Router } from "express";
import { getAllUsers } from "../../controllers/users/index.js";

const router = Router();

router.get("/", getAllUsers);

export default router;
