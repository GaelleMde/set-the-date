import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function AllEventCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${props.eachEvent._id}`);
  };



  console.log(props) 

  const isFavorite = props.favorites.some((fav) => fav._id === props.eachEvent._id )
  console.log(isFavorite) 


  
  return (
    <div className="all-event-card" onClick={handleClick}>
      <div className="all-event-card-data">
        <h4>
          {props.eachEvent.name} - {props.eachEvent.category}
        </h4>
        <p>Date:{props.eachEvent.startDate}</p>
        <p>Surface: {props.eachEvent.surface}</p>
      </div>
      <div className="all-event-card-heart">
          {isFavorite ? 
            ( <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
          }}
        >
          <i
            className={"bi bi-heart-fill"}
            style={{
              color: "red",
              border: "none",
              fontSize: "20px"
            }}
          ></i>
        </button>) : ( <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
          }}
        >
          <i
            className={"bi bi-heart"}
            style={{
              color: "red",
              border: "none",
              fontSize: "20px"
            }}
          ></i>{" "}</button>)}

      </div>
    </div>
  );
}

export default AllEventCard;
