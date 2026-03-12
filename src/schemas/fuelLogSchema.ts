import z from "zod";

export const fuelLogSchema = z.object({
  kilometresDriven: z
    .number({ error: "Please enter a valid number" })
    .min(1, "Kilometres driven must be greater than 0"),
  litres: z
    .number({ error: "Please enter a valid number" })
    .min(1, "Litres must be greater than 0"),
  pricePerLitre: z.number({ error: "Please enter a valid number" }),
  date: z
    .string({ error: "Please choose a valid date" })
    .min(1, "Please choose a date"),
});

export type FuelLogFormData = z.infer<typeof fuelLogSchema>;
