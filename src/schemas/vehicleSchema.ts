import z from "zod";

export const vehicleSchema = z.object({
  make: z.string().min(1, "Car make can not be shorter than 1 character"),
  model: z.string().min(1, "Car model can not be shorter than 1 character"),
  year: z
    .number({ error: "Please enter a valid year" })
    .min(1980, "Vehicle must be from 1980 or newer")
    .max(
      new Date().getFullYear(),
      `Vehicle can not be newer than ${new Date().getFullYear()}`,
    ),
  fuelType: z.enum(["petrol", "diesel", "electric", "hybrid"], {
    error: "Please select a fuel type",
  }),
  odometerValue: z
    .number({ error: "Please enter a valid odometer value" })
    .min(1, "Odometer value must be greater than 0"),
});

export type VehicleData = z.infer<typeof vehicleSchema>;
