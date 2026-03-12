import BorderLine from "@/components/ui/BorderLIne";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useFuel } from "@/context/FuelContext";
import { useVehicle } from "@/context/VehicleContext";
import { type FuelLogFormData, fuelLogSchema } from "@/schemas/fuelLogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FuelLogForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FuelLogFormData>({
    resolver: zodResolver(fuelLogSchema),
  });

  const { addFuelLog } = useFuel();
  const { currentVehicle } = useVehicle();

  const onSubmit = (data: FuelLogFormData) => {
    if (currentVehicle) {
      addFuelLog({
        ...data,
        vehicleId: currentVehicle.id,
        totalCost: data.litres * data.pricePerLitre,
      });
      reset();
    }
  };

  return (
    <Card>
      <Card.Header>
        <h2 className="heading-base">Fuel Statistics</h2>
      </Card.Header>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="card-content-title"
          label="Kilometres Driven"
          placeholder={"Enter your kilometres"}
          inputMode="decimal"
          error={errors.kilometresDriven?.message}
          {...register("kilometresDriven", { valueAsNumber: true })}
        />
        <Input
          className="card-content-title"
          label="Litres"
          placeholder={"Enter the amount in litres"}
          inputMode="decimal"
          error={errors.litres?.message}
          {...register("litres", { valueAsNumber: true })}
        />
        <Input
          className="card-content-title"
          label="Price per litre"
          placeholder={"Enter the price per litre"}
          inputMode="decimal"
          error={errors.pricePerLitre?.message}
          {...register("pricePerLitre", { valueAsNumber: true })}
        />
        <Input
          className={`card-content-title ${watch("date") ? "text-text-primary" : "text-text-muted"}`}
          label="Date"
          placeholder={"Enter the price per litre"}
          type="date"
          error={errors.date?.message}
          {...register("date")}
        />
        <BorderLine />
        <Button
          className="h-12 text-base mt-2"
          buttonVariant="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Save
        </Button>
      </form>
    </Card>
  );
};

export default FuelLogForm;
