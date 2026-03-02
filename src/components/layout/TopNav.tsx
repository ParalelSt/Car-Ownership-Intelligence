import { useLocation } from "react-router-dom";
import BackButton from "../ui/BackButton";

const TopNav = () => {
  const location = useLocation();

  const routeConfig: Record<string, { title: string; showBack: boolean }> = {
    "/": { title: "Dashboard", showBack: false },
    "/fuel": { title: "Fuel", showBack: true },
    "/service": { title: "Service", showBack: true },
    "/vehicles": { title: "Vehicles", showBack: true },
    "/profile": { title: "Profile", showBack: true },
  };

  const config = routeConfig[location.pathname] ?? {
    title: "",
    showBack: false,
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center w-full h-16 text-lg bg-primary">
      <div className="flex justify-center items-center w-10">
        {config.showBack && <BackButton />}
      </div>
      <div className="flex-1 text-center text-white font-semibold">
        {config.title}
      </div>
      <div className="flex justify-center items-center w-10"></div>
    </nav>
  );
};

export default TopNav;
