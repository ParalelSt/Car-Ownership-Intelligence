import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Fuel from "./pages/Fuel";
import Service from "./pages/Service";
import Vehicles from "./pages/Vehicles";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/service" element={<Service />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
