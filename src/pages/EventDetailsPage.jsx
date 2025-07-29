import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../context/auth.context";
import service from "../services/service.config";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import AddComment from "../components/AddComment";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
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

  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);

  function formatDate(startDate, endDate) {
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDate.getDate()}-${endDate.getDate()} ${endDate.toLocaleString(
        "en-US",
        { month: "long" }
      )}, ${endDate.getFullYear()}`;
    } else {
      return `${startDate.getDate()} ${startDate.toLocaleString("en-US", {
        month: "long",
      })}-${endDate.getDate()} ${endDate.toLocaleString("en-US", {
        month: "long",
      })},${endDate.getFullYear()}`;
    }
  }

  return (
    <div className="event-details-page">
      <div className="event-card">
        <img src={event.ImageUrl} alt={`Image of ${event.name}`} />
        <div className="event-info">
          <div className="event-header">
            <div className="event-main-info">
              <h1>
                {event.name} - {event.category}
              </h1>
              <h3>{formatDate(startDate, endDate)}</h3>
            </div>
            <span className={`surface ${event.surface.toLowerCase()}`}>
              {event.surface}
            </span>
          </div>

          <div className="event-details-info">
            <div className="event-grid">

              <div className="label-value">
                <span>Location</span>
                <span className="value">
                  {event.city}, {event.country}
                </span>
              </div>

              <div className="label-value">
                <span>Venue</span>
                <span className="value">{event.location}</span>
              </div>
              <div className="label-value">
                <span>Current Champion</span>
                <span className="value">{event.currentChampion}</span>
              </div>

              <div className="label-value">
                <span>Level</span>
                <span className="value">
                  {event.category} {event.level}
                </span>
              </div>

              <div className="label-value">
                <span>Prize Money</span>
                <span className="value">
                  {event.prizeMoney.toLocaleString()}$
                </span>
              </div>
            </div>
          </div>

  
          <hr />
          <div className="admin-buttons">
            {role === "admin" && (
              <button id="edit-button" onClick={handleEdit}>
                Edit
              </button>
            )}
            {role === "admin" && (
              <button id="delete-button" onClick={deleteEvent}>
                Delete
              </button>
            )}
          </div>

          {role === "admin" && <hr />}
        </div>
      </div>

      <h3 className="comments-title">Comments</h3>
      {comment.map((eachComment) => (
        <CommentCard
          key={eachComment._id}
          eachComment={eachComment}
          getData={getData}
        />
      ))}

      {isLoggedIn === true ? (
        <AddComment getComments={getComments} />
      ) : (
        <div className="login-to-comment">
          <p className="comment-login-intro">Want to join the conversation?</p>
          <p className="comment-login-message">
            <Link to="/login">
              Log in{" "}
              <i
                className="bi bi-box-arrow-up-right"
                style={{ fontSize: "14px" }}
              ></i>
            </Link>{" "}
            or{" "}
            <Link to="/signup">
              Create an account{" "}
              <i
                className="bi bi-box-arrow-up-right"
                style={{ fontSize: "14px" }}
              ></i>
            </Link>{" "}
            to leave a comment!{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default EventDetailsPage;
