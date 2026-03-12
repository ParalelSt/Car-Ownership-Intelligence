import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { VehicleProvider } from "./context/VehicleContext.tsx";
import { FuelProvider } from "./context/FuelContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <AuthProvider>
      <VehicleProvider>
        <FuelProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </FuelProvider>
      </VehicleProvider>
    </AuthProvider>
  </Router>,
);
