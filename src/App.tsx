import BottomNav from "@/components/layout/BottomNav";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import TopNav from "@/components/layout/TopNav";
import Fuel from "./pages/Fuel";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-1 p-4 py-20 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fuel" element={<Fuel />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
