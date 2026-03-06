import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Fuel from "@/pages/Fuel";
import Service from "@/pages/Service";
import Vehicles from "@/pages/Vehicles";
import Profile from "@/pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import GuestRoute from "./components/layout/GuestRoute";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <GuestRoute>
              <ForgotPassword />
            </GuestRoute>
          }
        />
      </Route>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fuel"
          element={
            <ProtectedRoute>
              <Fuel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service"
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <Vehicles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
