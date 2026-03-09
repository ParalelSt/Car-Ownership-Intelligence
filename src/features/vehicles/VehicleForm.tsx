import BorderLine from "@/components/ui/BorderLIne";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useVehicle } from "@/context/VehicleContext";
import { vehicleSchema, type VehicleData } from "@/schemas/vehicleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const fuelTypeOptions = vehicleSchema.shape.fuelType.options;

const VehicleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VehicleData>({
    resolver: zodResolver(vehicleSchema),
  });

  const { addVehicle } = useVehicle();

  const onSubmit = (data: VehicleData) => {
    addVehicle(data);
    reset();
  };

  return (
    <Card>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="card-content-title"
          label="Make"
          placeholder={"Enter the car make"}
          inputMode="text"
          error={errors.make?.message}
          {...register("make")}
        />
        <Input
          className="card-content-title"
          label="Model"
          placeholder={"Enter the car model"}
          inputMode="text"
          error={errors.model?.message}
          {...register("model")}
        />
        <Input
          className="card-content-title"
          label="Year"
          placeholder={"Enter the year"}
          inputMode="decimal"
          error={errors.year?.message}
          {...register("year", { valueAsNumber: true })}
        />
        <Select
          label="Fuel Type"
          defaultValue=""
          required
          error={errors.fuelType?.message}
          {...register("fuelType")}
        >
          <option value="" disabled>
            Select Fuel Type
          </option>
          {fuelTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </Select>
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

export default VehicleForm;
