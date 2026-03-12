import FuelLogForm from "@/features/fuel/FuelLogForm";
import FuelLogList from "@/features/fuel/FuelLogList";

const Fuel = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <FuelLogForm />
      <FuelLogList />
    </div>
  );
};

export default Fuel;
