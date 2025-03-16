import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Language Learning App</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
