import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      
      <Link to="/signup">Sign Up</Link> 
      <br />
      <Link to="/login">Login</Link>
    </div>
  )
}

export default LandingPage