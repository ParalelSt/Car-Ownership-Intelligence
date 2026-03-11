import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useVehicle } from "@/context/VehicleContext";
import type { Vehicle } from "@/types/vehicleTypes";

interface VehicleCardProps {
  vehicle: Vehicle;
  isActive: boolean;
}

const VehicleCard = ({ vehicle, isActive }: VehicleCardProps) => {
  const { setCurrentVehicle } = useVehicle();

  const handleClick = (vehicle: Vehicle) => {
    setCurrentVehicle(vehicle);
  };

  return (
    <Card className={`relative ${isActive ? "border border-primary" : ""}`}>
      <Card.Header className="flex-row">
        <h2 className="w-fit heading-base">
          {vehicle.make + " " + vehicle.model}
        </h2>
        {isActive && (
          <span className="flex justify-center items-center w-fit ml-auto px-2 py-1 rounded-lg bg-surface-secondary heading-xs text-primary">
            Current Vehicle
          </span>
        )}
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col justify-center gap-1">
          <span className="heading-sm text-text-secondary">
            {vehicle.odometerValue + " " + "km"}
          </span>
          <span className="heading-sm text-text-secondary">{vehicle.year}</span>
          <span className="heading-sm text-text-secondary capitalize">
            {vehicle.fuelType}
          </span>
        </div>
      </Card.Content>
      <Card.Footer>
        {!isActive && (
          <Button buttonVariant="primary" onClick={() => handleClick(vehicle)}>
            Set as Active
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default VehicleCard;
