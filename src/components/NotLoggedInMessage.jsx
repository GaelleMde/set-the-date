import { Link } from 'react-router-dom'

function NotLoggedInMessage() {
  return (
    <div className = "not-logged-in-card">
     <div className="plus-button">
        <button>+</button>
     </div>

         <div className = "not-logged-in-content">
           <p> <Link to="/login">Log in <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }} ></i></Link> or <Link to="/signup">Create an account <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }}></i></Link>  to save your favorite tournaments! </p>
         </div>
       
    </div>
  )
}

export default NotLoggedInMessage