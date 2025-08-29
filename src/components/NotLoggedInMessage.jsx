import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

function NotLoggedInMessage() {
  return (
    <div className = "not-logged-in-card">
     <div className="lock-bg">
       <i class="bi bi-lock"></i>
     </div>

         <div className = "not-logged-in-content">
          <h3>Track Your Favorite Tournaments</h3>
          <h4>Sign in to save your favorite tournaments and get personalized updates about matches and results.</h4>
          <button><i class="bi bi-heart"></i> Sign in to Add Favorites</button>
           {/* <p> <Link to="/login">Log in <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }} ></i></Link> or <Link to="/signup">Create an account <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }}></i></Link>  to save your favorite tournaments! </p> */}
         </div>
       
    </div>
  )
}

export default NotLoggedInMessage