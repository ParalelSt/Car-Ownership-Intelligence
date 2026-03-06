import z from "zod";

export const vehicleSchema = z.object({
  make: z.string().min(1, "Car make can not be shorter than 1 character"),
  model: z.string().min(1, "Car model can not be shorter than 1 character"),
  year: z
    .number()
    .min(1980, "Vehicle must be from 1980 or newer")
    .max(
      new Date().getFullYear(),
      `Vehicle can not be newer than ${new Date().getFullYear}`,
    ),
  fuelType: z.enum(["petrol", "diesel", "electric", "hybrid"]),
});

export type VehicleData = z.infer<typeof vehicleSchema>;
