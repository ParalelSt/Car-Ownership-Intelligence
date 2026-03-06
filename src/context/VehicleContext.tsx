import type { Vehicle } from "@/types/vehicleTypes";
import { createContext, useContext, useState } from "react";

type VehicleContextType = {
  vehicles: Vehicle[];
  currentVehicle: Vehicle | null;
  addVehicle: (data: Omit<Vehicle, "id">) => void;
  setCurrentVehicle: (vehicle: Vehicle) => void;
};

const VehicleContext = createContext<VehicleContextType | null>(null);

export const VehicleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vehicles, setVehicles] = useState<VehicleContextType["vehicles"]>([]);
  const [currentVehicle, setCurrentVehicle] =
    useState<VehicleContextType["currentVehicle"]>(null);

  const addVehicle = (data: Omit<Vehicle, "id">) => {
    const newVehicle: Vehicle = { ...data, id: crypto.randomUUID() };
    setVehicles((prev) => [...prev, newVehicle]);
    if (vehicles.length === 0) setCurrentVehicle(newVehicle);
  };

  return (
    <VehicleContext.Provider
      value={{ vehicles, currentVehicle, addVehicle, setCurrentVehicle }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context)
    throw new Error("useVehicle must be used inside VehicleProvider");
  return context;
};
