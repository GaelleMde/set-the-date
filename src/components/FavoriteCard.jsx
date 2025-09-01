import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function FavoriteCard(props) {
  const navigate = useNavigate();
  console.log(props);
  const handleClick = () => {
    navigate(`/event/${props.eachFavorite._id}`);
  };

  const startDate = new Date(props.eachFavorite.startDate);
  const endDate = new Date(props.eachFavorite.endDate);

  function formatDate(startDate, endDate) {
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDate.getDate()} - ${endDate.getDate()} ${endDate.toLocaleString(
        "en-US",
        { month: "long" }
      )}, ${endDate.getFullYear()}`;
    } else {
      return `${startDate.getDate()} ${startDate.toLocaleString("en-US", {
        month: "long",
      })} - ${endDate.getDate()} ${endDate.toLocaleString("en-US", {
        month: "long",
      })}, ${endDate.getFullYear()}`;
    }
  }

  return (
    <div className="favorite-card" onClick={handleClick}>
      <img src={props.eachFavorite.ImageUrl} alt="" />

      <div className="favorite-card-data">
        <h4>
          {props.eachFavorite.name} - {props.eachFavorite.category}{" "}
        </h4>
        <p>
          <i class="bi bi-calendar3"></i>
          {formatDate(startDate, endDate)}
          <br />
          <i class="bi bi-geo-alt"></i>
          {props.eachFavorite.city}{" "}
        </p>
      </div>
    </div>
  );
}

export default FavoriteCard;
