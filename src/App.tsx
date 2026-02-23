import Nav from "./components/BottomNav";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 pb-20 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
      <Nav />
    </div>
  );
}

export default App;
