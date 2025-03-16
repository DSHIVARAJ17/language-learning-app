import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const languages = [
    "Japanese", "English", "Spanish", "French", "German", "Chinese", "Korean", "Italian", "Russian", "Portuguese",
    "Arabic", "Hindi", "Turkish", "Dutch", "Greek", "Swedish", "Polish", "Thai", "Hebrew", "Vietnamese"
  ];

  const handleLanguageClick = (language) => {
    if (language === "Japanese") {
      navigate("/japanese");
    } else {
      setMessage(`${language} is not available.`);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Language Selection</h2>
      <p style={{ color: "red", fontWeight: "bold" }}>Now only Japanese is available.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", maxWidth: "600px", margin: "auto" }}>
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleLanguageClick(language)}
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: language === "Japanese" ? "#4CAF50" : "#ddd",
            }}
          >
            {language}
          </button>
        ))}
      </div>
      {message && <p style={{ color: "red", marginTop: "20px" }}>{message}</p>}
    </div>
  );
};

export default LanguageSelection;
