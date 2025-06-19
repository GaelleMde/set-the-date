import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function UpcomingEventCard(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/upcoming/${props.eachUpcomingEvent._id}`);
  };

  return (
   
       <div className = "upcoming-card" onClick={handleClick} >
    <img src={props.eachUpcomingEvent.ImageUrl} alt=""/>

    <div className = "upcoming-card-data">
    <h4>{props.eachUpcomingEvent.name} - {props.eachUpcomingEvent.category}</h4>
    <p><i class="bi bi-calendar3"></i> {props.eachUpcomingEvent.startDate.slice(0,10)}</p>
    <p>Surface: {props.eachUpcomingEvent.surface}</p>
    </div>
    </div>
   
  )
}

export default UpcomingEventCard