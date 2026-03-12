import Card from "@/components/ui/Card";
import { useFuel } from "@/context/FuelContext";
import { useVehicle } from "@/context/VehicleContext";
import FuelLogItem from "./FuelLogItem";

const FuelLogList = () => {
  const { currentVehicle } = useVehicle();
  const { fuelLogs } = useFuel();

  const formatDate = (dateString: string) => {
    return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  if (!currentVehicle) {
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

  const odometerReading = fuelLogs.reduce<number[]>((acc, log, i) => {
    const prev = i === 0 ? currentVehicle.odometerValue : acc[i - 1];
    return [...acc, prev + log.kilometresDriven];
  }, []);

  if (fuelLogs.length === 0) {
    return (
      <Card className="flex flex-col items-center">
        <Card.Header>
          <h2 className="heading-base text-text-primary">No fuel logs yet.</h2>
        </Card.Header>
        <span className="heading-sm text-text-secondary">
          Log your first refuel to start tracking fuel.
        </span>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {fuelLogs.map((f, i) => (
        <FuelLogItem
          key={f.id}
          date={formatDate(f.date)}
          totalCost={f.totalCost}
          litres={f.litres}
          odometerValue={odometerReading[i]}
          pricePerLitre={f.pricePerLitre}
        />
      ))}
    </div>
  );
};

export default FuelLogList;
