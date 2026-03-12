import { useVehicle } from "@/context/VehicleContext";
import VehicleCard from "./VehicleCard";
import Card from "@/components/ui/Card";

const VehicleList = () => {
  const { vehicles, currentVehicle } = useVehicle();

  if (vehicles.length === 0) {
    return (
      <Card className="flex flex-col items-center">
        <Card.Header>
          <h2 className="heading-base text-text-primary">No vehicles yet.</h2>
        </Card.Header>
        <span className="heading-sm text-text-secondary">
          Add your first vehicle to start tracking fuel and maintenance.
        </span>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {vehicles.map((v) => (
        <VehicleCard
          key={v.id}
          vehicle={v}
          isActive={v.id === currentVehicle?.id}
          showActiveBorder={true}
        />
      ))}
    </div>
  );
};

export default VehicleList;
