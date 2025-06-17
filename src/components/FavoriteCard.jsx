import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function FavoriteCard(props) {

  const navigate = useNavigate();
console.log(props)
  const handleClick = () => {
    navigate(`/event/${props.eachFavorite._id}`);
  };



  return (

    <div className = "favorite-card" onClick={handleClick} >
    
    <img src={props.eachFavorite.ImageUrl} alt="" />
    
    
      <div className = "favorite-card-data">
    <h4>{props.eachFavorite.name} - {props.eachFavorite.category} </h4>
    <p><i class="bi bi-calendar3"></i>{props.eachFavorite.startDate.slice(0,10)} <br/><i class="bi bi-geo-alt"></i>{props.eachFavorite.city}  </p>
    
    
    </div>
    </div>
  )
}

export default FavoriteCard