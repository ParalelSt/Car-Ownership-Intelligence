import { CaretRightIcon } from "@phosphor-icons/react";

interface SettingsNavigationItemProps {
  icon?: React.ReactNode;
  settingLabel: string;
  className?: string;
  onClick: () => void;
}

const SettingsNavigationItem = ({
  icon,
  settingLabel,
  className,
  onClick,
}: SettingsNavigationItemProps) => {
  return (
    <div
      className={`flex justify-center items-center gap-2 -mx-3 p-3 border-t border-border-subtle settings-item text-text-primary ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center">{icon}</div>
      <span className="mr-auto text-base">{settingLabel}</span>
      <CaretRightIcon size={20} className="text-text-secondary" />
    </div>
  );
};

export default SettingsNavigationItem;
