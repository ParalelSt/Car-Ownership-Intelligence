import BorderLine from "@/components/ui/BorderLIne";
import Card from "@/components/ui/Card";
import SettingsNavigationItem from "@/components/ui/SettingsNavigationItem";
import { useAuth } from "@/context/AuthContext";
import { PowerIcon } from "@phosphor-icons/react";

const SupportCard = () => {
  const { logOut } = useAuth();

  return (
    <Card>
      <h2 className="heading-base">Support</h2>
      <BorderLine className="-mx-3 w-[calc(100%+1.5rem)]" />
      <SettingsNavigationItem
        icon={<PowerIcon size={24} className="text-red-500" />}
        settingLabel="Log Out"
        onClick={logOut}
      />
    </Card>
  );
};

export default SupportCard;
