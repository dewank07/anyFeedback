import { z } from "zod";
export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(10, "Username must not be more than 10")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(6, { message: "password must be atleast 6 characters" }),
});
