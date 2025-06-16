import { useNavigate } from "react-router-dom";


function FavoriteCard(props) {

  const navigate = useNavigate();
console.log(props)
  const handleClick = () => {
    navigate(`/event/${props.eachFavorite._id}`);
  };



  return (

    <div className = "favorite-card" onClick={handleClick}
    style={{
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "10px auto",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
  }} >
    
    <h4>{props.eachFavorite.name}</h4>
    <p>Date: {props.eachFavorite.startDate.slice(0,10)}</p>
    <p>Current champion: {props.eachFavorite.currentChampion}</p>
    
    </div>
  )
}

export default FavoriteCard