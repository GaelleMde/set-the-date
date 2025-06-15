import { useNavigate } from "react-router-dom";

function AllEventCard(props) {

    const navigate = useNavigate();
    
    const handleClick = () => {
    navigate(`/event/${props.eachEvent._id}`);
  };


  return (
     
    <div>
       <div className = "upcoming-event-card" onClick={handleClick}
    style={{
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "10px auto",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#FFA500"
  }} >
    
    <h4>{props.eachEvent.name} - {props.eachEvent.category}</h4>
    <p>Date:{props.eachEvent.startDate}</p>
    <p>Surface: {props.eachEvent.surface}</p>
    
    </div>
    </div>
  )
}

export default AllEventCard