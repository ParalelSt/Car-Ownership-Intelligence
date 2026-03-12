import Card from "@/components/ui/Card";
import { RoadHorizonIcon } from "@phosphor-icons/react";
import { GasPumpIcon } from "@phosphor-icons/react";

interface FuelLogItemProps {
  totalCost: number;
  litres: number;
  odometerValue: number;
  pricePerLitre: number;
  date: string;
}

const FuelLogItem = ({
  totalCost,
  litres,
  odometerValue,
  pricePerLitre,
  date,
}: FuelLogItemProps) => {
  return (
    <Card>
      <Card.Header>
        <div className="flex">
          <h2 className="heading-base">{date}</h2>
          <span className="heading-base ml-auto text-primary">
            {"$" + totalCost.toFixed(2)}
          </span>
        </div>
      </Card.Header>
      <Card.Content>
        <div className="flex">
          <h3 className="flex items-center gap-2">
            <GasPumpIcon className="w-5 h-5 text-primary" />
            <span className="heading-sm text-text-primary">
              {litres.toFixed(2) + " " + "L"}
            </span>
          </h3>
          <h3 className="flex items-center ml-auto gap-2">
            <RoadHorizonIcon className="text-text-secondary" />
            <span className="heading-sm text-text-secondary">
              {odometerValue + " " + "km"}
            </span>
          </h3>
        </div>
      </Card.Content>
      <Card.Footer>
        <span className="heading-xs tracking-wider text-text-muted">
          {"$" + pricePerLitre.toFixed(2) + " " + "/ L"}
        </span>
      </Card.Footer>
    </Card>
  );
};

export default FuelLogItem;
