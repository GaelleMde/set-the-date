import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";


function NotLoggedInMessage() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }
 
  return (
    <div className = "not-logged-in-card">
     <div className="lock-bg">
       <i className="bi bi-lock"></i>
     </div>

         <div className = "not-logged-in-content">
          <h3>Track Your Favorite Tournaments</h3>
          <h4>Sign in to save your favorite tournaments and get personalized updates about matches and results.</h4>
          <button onClick={handleLogin}><i class="bi bi-heart"></i> Sign in to Add Favorites</button>
           {/* <p> <Link to="/login">Log in <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }} ></i></Link> or <Link to="/signup">Create an account <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }}></i></Link>  to save your favorite tournaments! </p> */}
         </div>
       
    </div>
  )
}

export default NotLoggedInMessage