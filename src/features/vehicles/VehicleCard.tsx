import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useVehicle } from "@/context/VehicleContext";
import type { Vehicle } from "@/types/vehicleTypes";
import {
  ClockClockwiseIcon,
  GasPumpIcon,
  RoadHorizonIcon,
} from "@phosphor-icons/react";

interface VehicleCardProps {
  vehicle: Vehicle;
  isActive: boolean;
  showActiveBorder?: boolean;
}

const VehicleCard = ({
  vehicle,
  isActive,
  showActiveBorder,
}: VehicleCardProps) => {
  const { setCurrentVehicle } = useVehicle();

  const handleClick = (vehicle: Vehicle) => {
    setCurrentVehicle(vehicle);
  };

  return (
    <Card
      className={`relative ${isActive && showActiveBorder ? "shadow-[inset_4px_0_0_var(--color-primary)]" : ""}`}
    >
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
          <h3 className="flex items-center gap-2">
            <RoadHorizonIcon className="text-text-secondary" />
            <span className="heading-sm text-text-secondary">
              {vehicle.odometerValue + " " + "km"}
            </span>
          </h3>
          <h3 className="flex items-center gap-2">
            <ClockClockwiseIcon className="text-text-secondary" />
            <span className="heading-sm text-text-secondary">
              {vehicle.year}
            </span>
          </h3>
          <h3 className="flex items-center gap-2">
            <GasPumpIcon className="text-text-secondary" />
            <span className="heading-sm text-text-secondary capitalize">
              {vehicle.fuelType}
            </span>
          </h3>
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
