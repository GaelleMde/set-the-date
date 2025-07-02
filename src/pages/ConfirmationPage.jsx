import { Link } from "react-router-dom";

function ConfirmationPage() {
  return (
        <div className="text-center mt-5">
      <h2>✅ Tournament successfully created!</h2>
     
      <Link to="/">
        <button className="btn btn-primary mt-3">Back to homepage</button>
      </Link>
    </div>
  );
}


export default ConfirmationPage