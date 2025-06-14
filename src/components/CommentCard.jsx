import React from 'react'

function CommentCard(props) {

    console.log(props.eachComment)
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
    
    
    </div>
    </div>
  )
}

export default CommentCard