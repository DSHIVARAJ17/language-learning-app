import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"; 

const Signup = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/language-selection");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />

          <button type="submit">Sign Up</button>
        </form>
        {message && <p className="error-message">{message}</p>}

        <p className="login-link">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
