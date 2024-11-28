import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Views/dashboard";
import Home from "./Views/home";
import OrganizerOverview from "./Views/OrganizerDashboard";
import Dash from "./Views/dash";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/org" element={<Dash />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
