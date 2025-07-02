import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../context/auth.context";
import service from "../services/service.config";
import FavoriteCard from "../components/FavoriteCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function HomePage() {
  const { role } = useContext(Authcontext);

  const [allFavorites, setAllFavorites] = useState([]);
  const [allUpcomingEvent, setAllUpcomingEvent] = useState(null);
  const { isLoggedIn } = useContext(Authcontext);

  useEffect(() => {
    if (isLoggedIn) {
    getFavorites()
  } else {
    setAllFavorites([])};
    getUpcomingEvents();
  }, [isLoggedIn]);

  const getFavorites = async () => {
    try {
      const favorites = await service.get(`user/favorite`);
      console.log(favorites.data.favorites);
      setAllFavorites(favorites.data.favorites); // almacenamos la data en setAllFavorites
    } catch (error) {
      console.log(error);
    }
  };

  const getUpcomingEvents = async () => {
    try {
      const upcomingEvents = await service.get(`event/upcoming`);
      console.log(upcomingEvents.data);
      setAllUpcomingEvent(upcomingEvents.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (allUpcomingEvent === null) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="homepage-main">
      <div className="title-homepage">
        <h2>My favorites tournaments</h2>
        <Link to="/favorite" className="favorite-link">
        {isLoggedIn === true && (
          <h6>View all my favorites</h6>)}
        </Link>
      </div>
      <div className="favorite-card-container">

        {isLoggedIn === false && (
          <div id="auth-reminder">
            <p> <Link to="/login">Log in <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }} ></i></Link> or <Link to="/signup">Create an account <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }}></i></Link>  to save your favorite tournaments! </p>
            <img src="/tennis-player.png" alt="" />
            </div>
          )}

        {isLoggedIn === true && (
        allFavorites.length === 0 ? (
          <p>You don’t have any favorite tournaments saved yet 🎾</p>
        ) : (
          allFavorites.map((eachFavorite) => (
            <FavoriteCard key={eachFavorite._id} eachFavorite={eachFavorite} />
          ))
        )
        )}
      </div>
      <h2>Upcoming tournaments</h2>

      {!allUpcomingEvent || allUpcomingEvent.length === 0 ? (
        <p className="no-upcoming-events">
          {" "}
          No upcoming events scheduled yet 🥲
        </p>
      ) : (
        <div className="upcoming-card-container">
          {allUpcomingEvent.map((eachUpcomingEvent) => (
            <UpcomingEventCard
              key={eachUpcomingEvent._id}
              eachUpcomingEvent={eachUpcomingEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
