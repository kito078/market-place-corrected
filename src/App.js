import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="explore" element={<Explore />} />
        <Route path="offers" element={<Offers />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
