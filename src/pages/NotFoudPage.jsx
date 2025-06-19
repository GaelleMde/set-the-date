import { useNavigate } from "react-router-dom";

function NotFoudPage() {

    const navigate = useNavigate();


  return (
    <div className="notfound-container"  style={{ margin: "32px" }}>
      <h1 className="notfound-code">404</h1>
      <p className="notfound-message">Sorry, the page you’re looking for doesn’t exist.</p>
       <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.5rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          

        }}
      >Go back to Homepage</button>
    </div>
  )
}

export default NotFoudPage