import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(5, "Must be 5 char").max(20, "Must be 20 char"),
    email: z.string().email(),
    password: z.string().min(8, "Must be 8"),
    conformPassword: z.string().min(8, "Must be 8"),
  })
  .refine((data) => data.password === data.conformPassword, {
    message: "Password must be same",
    path: ["conformPassword"],
  });

export type registerSchemaType = z.infer<typeof registerSchema>;
