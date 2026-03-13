import Card from "@/components/ui/Card";
import SettingsNavigationItem from "@/components/ui/SettingsNavigationItem";
import { useAuth } from "@/context/AuthContext";
import { PowerIcon } from "@phosphor-icons/react";

const SupportCard = () => {
  const { logOut } = useAuth();

  return (
    <Card className="overflow-hidden">
      <h2 className="mb-3 heading-base">Support</h2>
      <SettingsNavigationItem
        icon={<PowerIcon size={24} className="text-red-500" />}
        settingLabel="Log Out"
        className="-mb-3"
        onClick={logOut}
      />
    </Card>
  );
};

export default SupportCard;
