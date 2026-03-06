import z from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, "Email address is required"),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
