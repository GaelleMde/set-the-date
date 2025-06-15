import { useNavigate } from "react-router-dom";

function UpcomingEventCard(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${props.eachUpcomingEvent._id}`);
  };

  return (
    //<div id="upcoming-card-container">
       <div className = "upcoming-card" onClick={handleClick}
 /*    style={{
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px auto",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
  }} */ >
    
    <h4>{props.eachUpcomingEvent.name} - {props.eachUpcomingEvent.category}</h4>
    <p>Date:{props.eachUpcomingEvent.startDate}</p>
    <p>Surface: {props.eachUpcomingEvent.surface}</p>
    
    </div>
   //</div>
  )
}

export default UpcomingEventCard