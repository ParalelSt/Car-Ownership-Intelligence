import { type fuelLog } from "@/types/fuelLogTypes";
import { createContext, useContext, useState } from "react";

type FuelContextType = {
  fuelLogs: fuelLog[];
  addFuelLog: (data: Omit<fuelLog, "id">) => void;
};

const FuelContext = createContext<FuelContextType | null>(null);

export const FuelProvider = ({ children }: { children: React.ReactNode }) => {
  const [fuelLogs, setFuelLogs] = useState<FuelContextType["fuelLogs"]>([]);

  const addFuelLog = (data: Omit<fuelLog, "id">) => {
    const newLog: fuelLog = {
      ...data,
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    };
    setFuelLogs((prev) => [...prev, newLog]);
  };

  return (
    <FuelContext.Provider value={{ fuelLogs, addFuelLog }}>
      {children}
    </FuelContext.Provider>
  );
};

export const useFuel = () => {
  const context = useContext(FuelContext);
  if (!context) throw new Error("useFuel must be used inside FuelProvider");
  return context;
};
