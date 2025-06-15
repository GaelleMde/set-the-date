import { useContext, useEffect, useState } from "react"
import {Authcontext} from '../context/auth.context'
import service from '../services/service.config'
import { useNavigate, useParams } from "react-router-dom"
import CommentCard from "../components/CommentCard"
import AddComment from '../components/AddComment'

function EventDetailsPage() {

const {role} = useContext(Authcontext)
const [event, setEvent] = useState(null)
const [comment, setComment] = useState(null)
const params = useParams();
const navigate = useNavigate();

console.log(params)

const handleEdit = () => {
  navigate(`/event/edit/${params.eventId}`);
};

const deleteEvent = async  () => {
    await service.delete(`/event/${params.eventId}`)
    try {
        navigate(`/homepage`)
    } catch (error) {
        console.log(error)
    }
}


useEffect (() =>{
getEventDetails()
getComments()
}, [])

const getEventDetails = async () => {
 const eventResponse = await service.get(`/event/${params.eventId}`)
    try {
    console.log(eventResponse.data)
    setEvent(eventResponse.data)  
    } catch (error) {
        console.log(error)
    }
}

const getComments = async () => {
    const commentResponse = await service.get(`/comment/event/${params.eventId}`)
    try {
        console.log(commentResponse.data)
        setComment(commentResponse.data)
    } catch (error) {
        console.log(error)
    }
}




  if (event === null) {
    return <h3>Loading your data...⏳</h3>;
  }

  if (comment === null) {
    return <h3>Loading your data...⏳</h3>;
  }


  return (
    <div id="EventDetailsPage">
     <div id="event-detail-img">
           <img
            src={event.ImageUrl}
            alt={`Image of ${event.name}`}
            style={{ width: "100%",   height: "300px" ,  objectFit: "cover", objectPosition: "center"}}
          />
             <h2>{event.name} - {event.category} </h2>
             <p>{event.city}, {event.country}, {event.location}</p>
             <p>From {event.startDate} to {event.endDate}</p>
             <p>{event.name}</p>
             <p> Current Champion:{event.currentChampion}</p>
             <p> Surface:{event.surface}</p>
             <p> Level:{event.level}</p>
             <p> Prize Money:{event.prizeMoney.toLocaleString()}$</p>
             <hr />

             { role === "admin" && <button onClick={handleEdit}>Edit</button>}
             { role === "admin" && <button onClick={deleteEvent}>Delete</button>}

            <h3>Comments</h3>
            {comment.map((eachComment) => (
        <CommentCard key={eachComment._id} eachComment={eachComment}/>
        
      ))}

          
      <AddComment getComments={getComments}/>
         

        </div> 
        

    </div>
  )
}

export default EventDetailsPage

