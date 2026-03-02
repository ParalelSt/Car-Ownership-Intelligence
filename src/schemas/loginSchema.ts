import z from "zod";

export const loginSchema = z.object({
  email: z.email("Email address is required"),
  password: z.string("Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
