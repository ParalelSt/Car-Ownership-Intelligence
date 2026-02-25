import BorderLine from "@/components/ui/BorderLIne";
import Card from "@/components/ui/Card";

interface FuelLogCardProps {
  costPerKm: string;
  costPerMonth?: string;
  averageConsumption: string;
}

const FuelLogCard = ({
  costPerKm,
  costPerMonth,
  averageConsumption,
}: FuelLogCardProps) => {
  // MAKE PARAGRAPH STYLES INTO REUSABLE STYLES INSIDE INDEX.CSS - reusable text styles (appears across entire site)

  return (
    <Card className="p-3">
      <div className="flex flex-col">
        <h3 className="card-content-title">Cost per km</h3>
        <p className="flex items-center card-text-xl font-bold">
          {costPerKm ? "$" + costPerKm : "No value"}
          <span className="heading-base text-text-secondary">/km</span>
        </p>
      </div>
      <BorderLine />
      <div className="flex flex-col">
        <h3 className="card-content-title">Monthly Cost</h3>
        <p className="flex items-center card-text-lg font-bold">
          {costPerMonth ? "$" + costPerMonth : "No value"}
        </p>
      </div>
      <BorderLine />
      <div className="flex flex-col">
        <h3 className="card-content-title">Avg. Consumption</h3>
        <p className="card-text-base font-bold">
          {averageConsumption ? averageConsumption : "No value"}
          <span className="heading-xs tracking-wider text-text-secondary">
            {" "}
            L/100km
          </span>
        </p>
      </div>
    </Card>
  );
};

export default FuelLogCard;
