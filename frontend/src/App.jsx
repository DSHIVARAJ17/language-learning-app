import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LanguageSelection from "./pages/LanguageSelection";
import Japanese from "./pages/Japanese";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/japanese" element={<Japanese />} />
      </Routes>
    </>
  );
};

export default App;
