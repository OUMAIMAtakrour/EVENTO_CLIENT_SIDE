import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Dash from "./Views/dash";
import EventManagement from "./Views/EventsManagement";
import TeamManagement from "./Views/UserManagement";
import AuthPage from "./Views/Auth";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/org" element={<Dash />} />
        <Route path="/event" element={<EventManagement />} />
        <Route path="/users" element={<TeamManagement />} />
        <Route path="/" element={<AuthPage />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
