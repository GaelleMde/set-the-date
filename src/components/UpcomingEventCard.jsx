import React from 'react'

function UpcomingEventCard(props) {
  return (

       <div className = "upcoming-event-card"
    style={{
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "10px auto",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
  }} >
    
    <h4>{props.eachUpcomingEvent.name} - {props.eachUpcomingEvent.category}</h4>
    <p>Date:{props.eachUpcomingEvent.startDate}</p>
    <p>Surface: {props.eachUpcomingEvent.surface}</p>
    
    </div>
   
  )
}

export default UpcomingEventCard