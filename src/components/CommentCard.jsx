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
   
    <div className = "comment-card" >
    <div className="comment-content">
<h6>{props.eachComment.user.name[0].toUpperCase() + props.eachComment.user.name.slice(1)} </h6>
    <p>{props.eachComment.text}</p> 
    </div>
    { role === "admin" && <i className="bi bi-trash3" onClick={handleDelete}></i>}
    
    </div>
    
  )
}

export default CommentCard