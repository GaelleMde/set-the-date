import { useNavigate, useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import service from "../services/service.config";
import { Authcontext } from "../context/auth.context";
import { useContext } from "react";

function AllEventCard(props) {

  const navigate = useNavigate();
  const params = useParams();
  const { isLoggedIn } = useContext(Authcontext);

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
      <div onClick={handleClick}>
      <div className="all-event-card-data-img">
  <img src={props.eachEvent.ImageUrl} alt="" />
  
      <div className="all-event-card-content">
          
          
          <div className="all-event-card-data" >
        <h4>
          {props.eachEvent.name} - {props.eachEvent.category}
        </h4>
        <p><i class="bi bi-calendar3"></i> {props.eachEvent.startDate.slice(0,10)}</p>
        <p><i class="bi bi-geo-alt"></i> {props.eachEvent.city}, {props.eachEvent.country} </p>
      </div>
      </div>
      </div>
      </div>
      {isLoggedIn && (
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
              color: "#00c4a6",
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
              color: "#00c4a6",
              border: "none",
              fontSize: "20px"
            }}
          ></i>{" "}</button>)}

          
</div>
      )}
    </div>
  );
}

export default AllEventCard;
