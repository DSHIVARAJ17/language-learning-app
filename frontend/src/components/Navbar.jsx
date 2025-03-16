import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure correct path

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/language-selection">Languages</Link>
      <Link to="/japanese">Japanese</Link>
    </nav>
  );
};

export default Navbar;
