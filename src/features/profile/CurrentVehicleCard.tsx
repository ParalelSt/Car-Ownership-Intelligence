import Card from "@/components/ui/Card";
import SettingsNavigationItem from "@/components/ui/SettingsNavigationItem";
import { useVehicle } from "@/context/VehicleContext";

const CurrentVehicleCard = () => {
  const { currentVehicle } = useVehicle();

  const temp = () => {};

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

  return (
    <Card className="overflow-hidden">
      <Card.Header>
        <SettingsNavigationItem
          className="-mt-3 -mx-4 border-t-0 border-b text-text-secondary"
          settingLabel="Current Vehicle"
          onClick={temp}
        />
      </Card.Header>
      <Card.Content>
        <div className="flex items-center">
          <div className="flex flex-col justify-center gap-3 w-42.5">
            <h2 className="heading-lg">
              {currentVehicle.make + " " + currentVehicle.model}
            </h2>
            <div className="flex flex-col justify-center gap-1">
              <span className="heading-base text-text-secondary">
                {currentVehicle.odometerValue + " " + "km"}
              </span>
              <div className="flex gap-1">
                <span className="heading-base text-text-secondary">
                  {currentVehicle.year}
                </span>
                <span className="text-center heading-base">&middot;</span>
                <span className="heading-base text-text-secondary capitalize">
                  {currentVehicle.fuelType}
                </span>
              </div>
            </div>
          </div>
          <img
            src="/images/illustrations/profile-car-illustration.svg"
            alt="car illustration"
            className="w-35 h-full"
          />
        </div>
      </Card.Content>
    </Card>
  );
};

export default CurrentVehicleCard;
