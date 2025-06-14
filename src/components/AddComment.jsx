import { useState } from "react"
import service from "../services/service.config";


function AddComment() {

const [comment, setComment] = useState("")

const handleSubmit = (e) => {
    e.preventDefault();
    postComment();
}

const newComment = {
    text: comment, 
} 


 const postComment = async () => {
   try {
    console.log("Sending comment to server...");
    const response = await service.post(`/comment/`, newComment)
    console.log("Response from server:", response);
    console.log(response)
   } catch (error) {
    console.log("Error sending comment:", error)
   } 
} 

  

console.log(newComment)


  return (
       <div style={{ backgroundColor: 'yellow', padding: '20px', fontWeight: 'bold' }}>
      <form onSubmit={handleSubmit}>
      <input
        placeholder="Type your comment here..."
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)} 
        style={{
          width: "100%",
          padding: "12px 15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          marginBottom: "12px",
          boxSizing: "border-box",
        }} 
        />
       
       <button type="submit">
        OK - envoyer commentaire        
       </button>


      </form>
    </div>
  )
}

export default AddComment