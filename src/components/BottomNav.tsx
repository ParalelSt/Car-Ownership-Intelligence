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
    <nav className="fixed bottom-0 left-0 right-0 flex mt-auto w-full h-16 text-lg  bg-surface-secondary">
      <NavLink
        to={"/"}
        className="flex flex-col justify-center items-center px-2 pt-3 pb-4 w-full h-full bottom-nav-item"
      >
        <HouseIcon className="w-full h-full" weight="fill" />
        <span className="text-xs font-semibold">Dashboard</span>
      </NavLink>
      <NavLink
        to={"/fuel"}
        className="flex flex-col justify-center items-center px-2 pt-3 pb-4 w-full h-full bottom-nav-item"
      >
        <GasPumpIcon className="w-full h-full" weight="fill" />
        <span className="text-xs font-semibold">Fuel</span>
      </NavLink>
      <NavLink
        to={"/service"}
        className="flex flex-col justify-center items-center px-2 pt-3 pb-4 w-full h-full bottom-nav-item"
      >
        <ToolboxIcon className="w-full h-full" weight="fill" />
        <span className="text-xs font-semibold">Service</span>
      </NavLink>
      <NavLink
        to={"/vehicles"}
        className="flex flex-col justify-center items-center px-2 pt-3 pb-4 w-full h-full bottom-nav-item"
      >
        <CarIcon className="w-full h-full" weight="fill" />
        <span className="text-xs font-semibold">Vehicles</span>
      </NavLink>
      <NavLink
        to={"/profile"}
        className="flex flex-col justify-center items-center px-2 pt-3 pb-4 w-full h-full bottom-nav-item"
      >
        <UserIcon className="w-full h-full" weight="fill" />
        <span className="text-xs font-semibold">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
