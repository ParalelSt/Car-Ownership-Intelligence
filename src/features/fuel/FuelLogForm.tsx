import BorderLine from "@/components/ui/BorderLIne";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { type FuelLogFormData, fuelLogSchema } from "@/schemas/fuelLogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FuelLogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FuelLogFormData>({
    resolver: zodResolver(fuelLogSchema),
  });

  const onSubmit = (data: FuelLogFormData) => {
    console.log(data);
  };

  return (
    <Card>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="card-content-title"
          label="Odometer"
          placeholder={"Enter your odometer value"}
          inputMode="decimal"
          error={errors.odometer?.message}
          {...register("odometer", { valueAsNumber: true })}
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
          label="Total Cost"
          placeholder={"Enter the cost amount"}
          inputMode="decimal"
          error={errors.totalCost?.message}
          {...register("totalCost", { valueAsNumber: true })}
        />
        <BorderLine />
        <Button
          className="h-12 text-base text-white mt-2"
          buttonVariant="primary"
          type="submit"
        >
          Save
        </Button>
      </form>
    </Card>
  );
};

export default FuelLogForm;
