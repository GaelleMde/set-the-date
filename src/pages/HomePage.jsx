import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../context/auth.context";
import service from "../services/service.config";
import FavoriteCard from "../components/FavoriteCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import NotLoggedInMessage from "../components/NotLoggedInMessage";
import "bootstrap-icons/font/bootstrap-icons.css";

function HomePage() {
  const { role } = useContext(Authcontext);

  const [allFavorites, setAllFavorites] = useState([]);
  const [allUpcomingEvent, setAllUpcomingEvent] = useState(null);
  const { isLoggedIn } = useContext(Authcontext);

  useEffect(() => {
    if (isLoggedIn) {
      getFavorites();
    } else {
      setAllFavorites([]);
    }
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
      <div className="hero-section">
        <h1>All your tournaments in one place</h1>
        <h2>
          Track every competition, save your favorites and join the community
        </h2>
        <div className="hero-button">
          <button>Explore tournaments</button>
          <button>Log in to save favorites</button>
        </div>
        <div className="features">
          <div className="feature-card">           
            <i class="bi bi-trophy"></i>            
            <h3>Upcoming Events</h3>
            <p>Stay informed with all upcoming tennis tournaments</p>
          </div>
          <div className="feature-card">            
            <i class="bi bi-heart"></i>            
            <h3>Favorites</h3>
            <p>Save and track your favorite competitions</p>
          </div>
          <div className="feature-card">            
            <i class="bi bi-chat-left-dots"></i>            
            <h3>Community</h3>
            <p>Share thoughts and interact with other tennis fans</p>
          </div>
        </div>
      </div>
      


      <h2>Tournaments Schedule</h2>

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
      <div className="title-homepage">
        <h2>My favorites tournaments</h2>
        <Link to="/favorite" className="favorite-link">
          {isLoggedIn === true && <h6>View all my favorites</h6>}
        </Link>
      </div>

        <div className="favorite-card-container">
        {isLoggedIn === false && (
          <NotLoggedInMessage />)}

        {isLoggedIn === true &&
          (allFavorites.length === 0 ? (
            <p>You don’t have any favorite tournaments saved yet 🎾</p>
          ) : (
            allFavorites.map((eachFavorite) => (
              <FavoriteCard
                key={eachFavorite._id}
                eachFavorite={eachFavorite}
              />
            ))
          ))}
      </div>
    </div>
  );
}

export default HomePage;
