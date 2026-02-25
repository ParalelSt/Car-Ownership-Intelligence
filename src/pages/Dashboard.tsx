import { mockFuelLogs } from "@/data/mockFuelLogs";
import FuelLogCard from "@/features/dashboards/FuelLogCard";
import {
  calculateAvgConsumption,
  calculateCostPerKm,
  calculateMonthlyCost,
} from "@/lib/fuelCalculations";

const Dashboard = () => {
  const costPerKm = calculateCostPerKm(mockFuelLogs);
  const monthlyCost = calculateMonthlyCost(mockFuelLogs);
  const averageConsumption = calculateAvgConsumption(mockFuelLogs);

  return (
    <div className="flex flex-col w-full h-full">
      <FuelLogCard
        costPerKm={costPerKm}
        costPerMonth={monthlyCost}
        averageConsumption={averageConsumption}
      />
    </div>
  );
};

export default Dashboard;
