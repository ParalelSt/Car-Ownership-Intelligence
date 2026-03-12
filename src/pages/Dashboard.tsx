import Card from "@/components/ui/Card";
import { useFuel } from "@/context/FuelContext";
import { useVehicle } from "@/context/VehicleContext";
import FuelLogCard from "@/features/fuel/FuelLogCard";
import VehicleCard from "@/features/vehicles/VehicleCard";
import {
  calculateAvgConsumption,
  calculateCostPerKm,
  calculateMonthlyCost,
} from "@/lib/fuelCalculations";

const Dashboard = () => {
  const { fuelLogs } = useFuel();

  const costPerKm = calculateCostPerKm(fuelLogs);
  const monthlyCost = calculateMonthlyCost(fuelLogs);
  const averageConsumption = calculateAvgConsumption(fuelLogs);

  const { currentVehicle } = useVehicle();

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <FuelLogCard
        costPerKm={costPerKm}
        costPerMonth={monthlyCost}
        averageConsumption={averageConsumption}
      />
      {currentVehicle ? (
        <VehicleCard vehicle={currentVehicle} isActive={true} />
      ) : (
        <Card className="flex flex-col items-center">
          <Card.Header>
            <h2 className="heading-base text-text-primary">No vehicles yet.</h2>
          </Card.Header>
          <span className="heading-sm text-text-secondary">
            Add your first vehicle to start tracking fuel and maintenance.
          </span>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
