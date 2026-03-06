import { Outlet } from "react-router-dom";
import TitleCard from "./TitleCard";

const AuthLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <TitleCard />
      <main className="flex justify-center p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
