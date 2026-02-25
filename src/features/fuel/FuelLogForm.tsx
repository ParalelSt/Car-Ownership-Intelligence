import BorderLine from "@/components/ui/BorderLIne";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

const FuelLogForm = () => {
  return (
    <Card>
      <form className="flex flex-col">
        <Input />
        <BorderLine />
        <Button className="text-text-primary" bg_color="surface-secondary">
          More Details
        </Button>
      </form>
    </Card>
  );
};

export default FuelLogForm;
