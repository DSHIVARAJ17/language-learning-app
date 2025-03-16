import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1>Welcome to Lang Learn</h1>
      <p style={{ maxWidth: "600px", margin: "auto", textAlign: "justify" }}>
        Language is the bridge that connects people, cultures, and ideas across the world. 
        Learning a new language enhances cognitive skills, improves memory, and boosts creativity. 
        It opens up new career opportunities, allowing individuals to communicate in global markets. 
        Furthermore, multilingual individuals develop better problem-solving abilities and adaptability. 
        Embracing new languages fosters cultural understanding and brings people closer together.
      </p>
      <p style={{ maxWidth: "600px", margin: "auto", textAlign: "justify" }}>
        In today's interconnected world, language learning is more important than ever. 
        Whether for travel, education, or professional growth, being multilingual provides a competitive edge. 
        It enables deeper engagement with foreign literature, movies, and traditions, enriching personal experiences. 
        Scientific studies show that learning multiple languages helps prevent cognitive decline with age. 
        Start your journey with us and explore the beauty of language and communication!
      </p>
      <button 
        onClick={() => navigate("/signup")} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Main;
