import BorderLine from "@/components/ui/BorderLIne";
import Card from "@/components/ui/Card";
import SettingsNavigationItem from "@/components/ui/SettingsNavigationItem";
import {
  BellIcon,
  ChartBarIcon,
  PlugChargingIcon,
  UserIcon,
} from "@phosphor-icons/react";

const AccountCard = () => {
  //TEMP FUNCTION

  const temp = () => {};

  return (
    <Card>
      <h2 className="mb-3 heading-base">Account</h2>
      <BorderLine className="-mx-3 w-[calc(100%+1.5rem)]" />
      <SettingsNavigationItem
        icon={<UserIcon size={24} className="text-accent" />}
        settingLabel="Account Settings"
        className="mb-3"
        onClick={temp}
      />
      <BorderLine className="-mx-3 w-[calc(100%+1.5rem)]" />
      <SettingsNavigationItem
        icon={<BellIcon size={24} className="text-accent" />}
        settingLabel="Notification Settings"
        className="mb-3"
        onClick={temp}
      />
      <BorderLine className="-mx-3 w-[calc(100%+1.5rem)]" />
      <SettingsNavigationItem
        icon={<PlugChargingIcon size={24} className="text-accent" />}
        settingLabel="Log Out"
        className="mb-3"
        onClick={temp}
      />
      <BorderLine className="-mx-3 w-[calc(100%+1.5rem)]" />
      <SettingsNavigationItem
        icon={<ChartBarIcon size={24} className="text-accent" />}
        settingLabel="Usage Statistics"
        className="mb-0"
        onClick={temp}
      />
    </Card>
  );
};

export default AccountCard;
