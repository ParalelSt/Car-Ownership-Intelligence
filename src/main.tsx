import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { VehicleProvider } from "./context/VehicleContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <AuthProvider>
      <VehicleProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </VehicleProvider>
    </AuthProvider>
  </Router>,
);
