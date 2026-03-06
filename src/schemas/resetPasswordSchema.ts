import z from "zod";

export const forgotPasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "The old password can not be shorter than 1 character"),
    newPassword: z
      .string()
      .min(8, "The new password can not be shorter than 8 characters"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.confirmNewPassword === data.newPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
