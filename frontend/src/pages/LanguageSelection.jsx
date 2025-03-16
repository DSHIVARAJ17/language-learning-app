import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LanguageSelection.css"; // Import CSS

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
    <div className="language-selection-container">
      <h2 className="language-selection-heading">Language Selection</h2>
      <p className="language-availability-message">Now only Japanese is available.</p>
      <div className="language-grid">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleLanguageClick(language)}
            className={`language-button ${language === "Japanese" ? "available" : ""}`}
          >
            {language}
          </button>
        ))}
      </div>
      {message && <p className="language-popup-message">{message}</p>}
    </div>
  );
};

export default LanguageSelection;
