import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Home</h1>
      
      <Link to="/signup">Sign Up</Link> 
      <br />
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Homepage