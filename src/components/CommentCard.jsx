import 'bootstrap-icons/font/bootstrap-icons.css';
import service from "../services/service.config";
import {Authcontext} from '../context/auth.context'
import { useContext } from "react"

function CommentCard(props) {

    console.log(props.eachComment)
    console.log(props.eachComment._id)

    const {role} = useContext(Authcontext)

    const handleDelete = async () => {
    try {
        await service.delete(`/comment/${props.eachComment._id}`)
    } catch (error) {
        console.log(error)
    }
    props.getData();
}


  return (
    <div>
    <div className = "comment-card"
    style={{
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "10px auto",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
  }} >
    
<h6>{props.eachComment.user.name} </h6>
    <p>{props.eachComment.text}</p> 
    { role === "admin" && <i className="bi bi-trash3" onClick={handleDelete}></i>}
    
    </div>
    </div>
  )
}

export default CommentCard