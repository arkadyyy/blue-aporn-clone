import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email("Invalid email format"),
  firstName: z.string().min(2, "First name must have at least 2 characters"),
  lastName: z.string().min(2, "Last name must have at least 2 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number format"),
});
export const googleSignUpSchema = z.object({
  // TODO -
});

export const verifyOtpSchema = z.object({
  uuid: z.uuid("Invalid uuid vormat"),
  otp: z.string().length(6, "Invalid otp length"),
});

export const emailLoginSchema = z.object({
  email: z.email("Invalid email format"),
  passowrd: z.string("Invalid password"),
});

export const socialLoginSchema = z.object({
  token: z.string("Token not provided"),
  email: z.email("Invalid email"),
});

export type SignupData = z.infer<typeof signUpSchema>;
