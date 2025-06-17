import {useContext, useState } from "react"
import service from "../services/service.config";
import { useParams } from "react-router-dom";
import { Authcontext } from "../context/auth.context";


function AddComment(props) {



const [comment, setComment] = useState("")
const params = useParams()
const { loggedUserId } = useContext(Authcontext)
console.log("Logged-in user ID:", loggedUserId)

const handleSubmit = (e) => {
    e.preventDefault();
    postComment();
}

 const postComment = async () => {

const newComment = {
    text: comment,
    event: params.eventId,
    user: loggedUserId,
} 

   try {
    const response = await service.post(`/comment/`, newComment)
    console.log("Response from server:", response);
    setComment("")
    props.getComments()
    // get get Comments, se actualizan los comentarios, despues de crear un comment
       } catch (error) {
    console.log(error)
   } 
} 

  




  return (
       <div className="add-comment-section">
      <form onSubmit={handleSubmit}>
       
      <input
        placeholder="Type your comment here..."
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)} 
        />
        
        
       
      <div>
       <button type="submit">
        <i class="bi bi-send"></i>      
       </button>
</div>

      </form>
    </div>
  )
}

export default AddComment