import z from "zod";

export const registerSchema = z
  .object({
    email: z.email({ error: "Please enter a valid email address" }),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username can not be longer than 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers and underscores",
      ),
    password: z
      .string()
      .min(8, "Password can not contain less than 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
