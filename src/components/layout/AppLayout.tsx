import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-1 p-4 py-20 overflow-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
