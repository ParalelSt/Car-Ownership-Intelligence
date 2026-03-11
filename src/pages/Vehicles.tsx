import VehicleForm from "@/features/vehicles/VehicleForm";
import VehicleList from "@/features/vehicles/VehicleList";

const Vehicles = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <VehicleForm />
      <VehicleList />
    </div>
  );
};

export default Vehicles;
