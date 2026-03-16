import Card from "@/components/ui/Card";
import SettingsNavigationItem from "@/components/ui/SettingsNavigationItem";
import {
  BellIcon,
  ChartBarIcon,
  PlugChargingIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const AccountCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden">
      <h2 className="mb-3 heading-base">Account</h2>
      <SettingsNavigationItem
        icon={<UserIcon size={24} className="text-accent" />}
        settingLabel="Account Settings"
        onClick={() => navigate("/account-settings")}
      />
      <SettingsNavigationItem
        icon={<BellIcon size={24} className="text-accent" />}
        settingLabel="Notification Settings"
        onClick={() => navigate("/notification-settings")}
      />
      <SettingsNavigationItem
        icon={<PlugChargingIcon size={24} className="text-accent" />}
        settingLabel="Connected Devices"
        onClick={() => navigate("/connected-devices")}
      />
      <SettingsNavigationItem
        icon={<ChartBarIcon size={24} className="text-accent" />}
        settingLabel="Usage Statistics"
        className="-mb-3"
        onClick={() => navigate("/usage-statistics")}
      />
    </Card>
  );
};

export default AccountCard;
