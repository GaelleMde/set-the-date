import { useNavigate, useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import service from "../services/service.config";


function AllEventCard(props) {

  const navigate = useNavigate();
  const params = useParams();

  console.log(props) 
  console.log(params)

  const handleClick = () => {
    navigate(`/event/${props.eachEvent._id}`);
  };

  const isFavorite = props.favorites.some((eachFav) => eachFav._id === props.eachEvent._id )
  console.log(isFavorite) 


  const handleFavoriteClick = async () => {
    
      try {
        if (isFavorite) {
         await service.patch(`user/favorite/${props.eachEvent._id}/remove`)
        
        } else {
         await service.patch(`user/favorite/${props.eachEvent._id}/add`)
        
        }
      } catch (error) {
        console.log(error)
      }

      props.getData()
    }
  

  
  return (
    <div className="all-event-card" >
      <div className="all-event-card-data-img">
  <img src={props.eachEvent.ImageUrl} alt="" />
  
      <div className="all-event-card-content">
          
          
          <div className="all-event-card-data" onClick={handleClick}>
        <h4>
          {props.eachEvent.name} - {props.eachEvent.category}
        </h4>
        <p>Date:{props.eachEvent.startDate.slice(0,10)}</p>
        <p>Surface: {props.eachEvent.surface}</p>
      </div>
      </div>
      </div>
      <div className="all-event-card-heart" >
          {isFavorite ? 
            ( <button onClick={handleFavoriteClick}
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
              color: "#fbcd91",
              border: "none",
              fontSize: "20px"
            }}
          ></i>
        </button>) : ( <button onClick={handleFavoriteClick}
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
              color: "#555555",
              border: "none",
              fontSize: "20px"
            }}
          ></i>{" "}</button>)}
          
</div>
      
    </div>
  );
}

export default AllEventCard;
