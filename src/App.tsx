import Nav from "./components/BottomNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto p-4">
        <Router>
          <Routes>
            <Route path="/" />
          </Routes>
        </Router>
      </main>
      <Nav />
    </div>
  );
}

export default App;
