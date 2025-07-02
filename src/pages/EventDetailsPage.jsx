import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../context/auth.context";
import service from "../services/service.config";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import AddComment from "../components/AddComment";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";


function EventDetailsPage() {
  const { role } = useContext(Authcontext);
  const [event, setEvent] = useState(null);
  const [comment, setComment] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(Authcontext);

  console.log(params);

  const getData = async () => {
    await getEventDetails();
    await getComments();
  };

  const handleEdit = () => {
    navigate(`/event/edit/${params.eventId}`);
  };

  const deleteEvent = async () => {
    await service.delete(`/event/${params.eventId}`);
    try {
      navigate(`/homepage`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    /* getEventDetails()
getComments() */
  }, []);

  const getEventDetails = async () => {
    const eventResponse = await service.get(`/event/${params.eventId}`);
    try {
      console.log(eventResponse.data);
      setEvent(eventResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    const commentResponse = await service.get(
      `/comment/event/${params.eventId}`
    );
    try {
      console.log(commentResponse.data);
      setComment(commentResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (event === null) {
    return <h3>Loading your data...⏳</h3>;
  }

  if (comment === null) {
    return <h3>Loading your data...⏳</h3>;
  }

  return (
    <div className="event-details-page">
      <div className="event-card">
        <img src={event.ImageUrl} alt={`Image of ${event.name}`} />
        <div className="event-info">
        <div className="name-surface">
          <h2>
            {event.name} - {event.category}{" "}
          </h2>
          <span className="surface">
            {event.surface === "Clay" && <>🟠 Clay</>}
            {event.surface === "Grass" && <>🟢 Grass</>}
            {event.surface === "Hard" && <>🔵 Hard</>}
            </span>
          </div>
          <p> <i class="bi bi-geo-alt"></i> {event.city}, {event.country}, {event.location} </p>
          <p> <i class="bi bi-calendar3"></i> From {event.startDate.slice(0, 10)} to {event.endDate.slice(0, 10)}
          </p>
          <p> <i class="bi bi-person-fill"></i> Current Champion:{event.currentChampion}</p>
          {/* <p> <i class="bi bi-slash-circle"></i> Surface:{event.surface}</p> */}
          <p><i class="bi bi-trophy"></i>  Level:{event.level}</p>
          <p> <i class="bi bi-cash"></i> Prize Money:{event.prizeMoney.toLocaleString()}$</p>

          <hr />
          <div className="admin-buttons">
            {role === "admin" && <button id="edit-button" onClick={handleEdit}>Edit</button>}
            {role === "admin" && <button id="delete-button" onClick={deleteEvent}>Delete</button>}
          </div>
          {role === "admin" && <hr />}
          
        </div>
      </div>
     
        <h3>Comments</h3>
        {comment.map((eachComment) => (
          <CommentCard
            key={eachComment._id}
            eachComment={eachComment}
            getData={getData}
          />
        ))}


        {isLoggedIn === true ? 
        <AddComment getComments={getComments} /> : 
        <div className="login-to-comment">
          <p className="comment-login-intro">Want to join the conversation?</p>
         <p className="comment-login-message"> <Link to="/login">Log in <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }} ></i></Link> or <Link to="/signup">Create an account <i className="bi bi-box-arrow-up-right" style={{ fontSize: "14px" }}></i></Link>  to leave a comment! </p>
        
        
        
        </div>}
    </div>
  );
}

export default EventDetailsPage;
