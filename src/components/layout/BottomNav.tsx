import {
  CarIcon,
  GasPumpIcon,
  HouseIcon,
  ToolboxIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex w-full h-16 bg-surface-secondary">
      <NavLink
        to={"/"}
        className="flex flex-col items-center justify-center flex-1 gap-1 bottom-nav-item"
      >
        <HouseIcon size={24} weight="fill" />
        <span className="text-xs font-semibold">Dashboard</span>
      </NavLink>
      <NavLink
        to={"/fuel"}
        className="flex flex-col items-center justify-center flex-1 gap-1 bottom-nav-item"
      >
        <GasPumpIcon size={24} weight="fill" />
        <span className="text-xs font-semibold">Fuel</span>
      </NavLink>
      <NavLink
        to={"/service"}
        className="flex flex-col items-center justify-center flex-1 gap-1 bottom-nav-item"
      >
        <ToolboxIcon size={24} weight="fill" />
        <span className="text-xs font-semibold">Service</span>
      </NavLink>
      <NavLink
        to={"/vehicles"}
        className="flex flex-col items-center justify-center flex-1 gap-1 bottom-nav-item"
      >
        <CarIcon size={24} weight="fill" />
        <span className="text-xs font-semibold">Vehicles</span>
      </NavLink>
      <NavLink
        to={"/profile"}
        className="flex flex-col items-center justify-center flex-1 gap-1 bottom-nav-item"
      >
        <UserIcon size={24} weight="fill" />
        <span className="text-xs font-semibold">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
