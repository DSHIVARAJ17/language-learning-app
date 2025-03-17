import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; 

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
  
    try {
      console.log("Sending request:", JSON.stringify(user));
  
      const response = await fetch("https://language-learning-app-5hrf.onrender.com/api/auth/login", { // Updated URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
      console.log("Response Status:", response.status);
      console.log("Response Data:", data);
  
      if (response.ok) {
        navigate("/language-selection");
      } else {
        setMessage("Password or email is incorrect, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="login-container">
  <h2 className="login-heading">Login</h2>
  <form onSubmit={handleSubmit} className="login-form">
    <div className="input-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required />
    </div>
    <button type="submit" className="login-btn">Login</button>
  </form>
  {message && <p className="error-message">{message}</p>}
</div>

  );
};

export default Login;
