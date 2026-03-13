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
    <Card className="overflow-hidden">
      <h2 className="mb-3 heading-base">Account</h2>
      <SettingsNavigationItem
        icon={<UserIcon size={24} className="text-accent" />}
        settingLabel="Account Settings"
        onClick={temp}
      />
      <SettingsNavigationItem
        icon={<BellIcon size={24} className="text-accent" />}
        settingLabel="Notification Settings"
        onClick={temp}
      />
      <SettingsNavigationItem
        icon={<PlugChargingIcon size={24} className="text-accent" />}
        settingLabel="Connected Devices"
        onClick={temp}
      />
      <SettingsNavigationItem
        icon={<ChartBarIcon size={24} className="text-accent" />}
        settingLabel="Usage Statistics"
        className="-mb-3"
        onClick={temp}
      />
    </Card>
  );
};

export default AccountCard;
