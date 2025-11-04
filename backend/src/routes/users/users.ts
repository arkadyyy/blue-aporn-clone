import { Router } from "express";
import {
  googleSignUp,
  signUp,
  verifyOtp,
  emailLogin,
} from "../../controllers/users/index.js";
import { validateBody } from "../../middlewares/validation.js";
import {
  signUpSchema,
  verifyOtpSchema,
  googleSignUpSchema,
  // loginSchema,
} from "../../schemas/users.js";
const router = Router();

router.post("/signup", validateBody(signUpSchema), signUp);
router.post("/verify_otp", validateBody(verifyOtpSchema), verifyOtp);
router.get("/google/callback", googleSignUp);

// router.post('/login',validateBody(loginSchema),emailLogin);
// router.post("/login/");

export default router;
