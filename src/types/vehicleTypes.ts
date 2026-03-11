export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  licensePlate?: string;
  fuelType: "petrol" | "diesel" | "electric" | "hybrid";
  odometerValue: number;
};
