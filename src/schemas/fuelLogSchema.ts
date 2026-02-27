import z from "zod";

export const fuelLogSchema = z.object({
  odometer: z
    .number({ error: "Please enter a valid number" })
    .min(1, "Odometer must be greater than 0"),
  litres: z
    .number({ error: "Please enter a valid number" })
    .min(1, "Litres must be greater than 0"),
  totalCost: z
    .number({ error: "Please enter a valid number" })
    .min(0.01, "Price must be greater than 0"),
});

export type FuelLogFormData = z.infer<typeof fuelLogSchema>;
