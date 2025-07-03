import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function UpcomingEventCard(props) {
  const navigate = useNavigate();

  const today = new Date();
  const isOngoing =
    new Date(props.eachUpcomingEvent.startDate) <= today &&
    today <= new Date(props.eachUpcomingEvent.endDate);

  const handleClick = () => {
    navigate(`/event/${props.eachUpcomingEvent._id}`);
  };

  return (
    <div className="upcoming-card" onClick={handleClick}>
       <div className="image-container">
      <img src={props.eachUpcomingEvent.ImageUrl} alt="" />
      {isOngoing && <span className="now-label">
        <div className="loader"></div>Now</span>}
      </div>
      <div className="upcoming-card-data">
        <h4>
          {props.eachUpcomingEvent.name} - {props.eachUpcomingEvent.category}
        </h4>
        <p>
          <i class="bi bi-calendar3"></i>{" "}
          {props.eachUpcomingEvent.startDate.slice(0, 10)}
        </p>
        <p>Surface: {props.eachUpcomingEvent.surface}</p>
      </div>
    </div>
  );
}

export default UpcomingEventCard;
