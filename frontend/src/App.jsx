import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import Navbar
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar /> {/* Add Navbar Here */}
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
