import React from 'react'

function FavoriteCard(props) {
  return (

    <div className = "favorite-card"
    style={{
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "10px auto",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
  }} >
    
    <h4>{props.eachFavorite.name}</h4>
    <p>Date:{props.eachFavorite.startDate}</p>
    <p>Current champion: {props.eachFavorite.currentChampion}</p>
    
    </div>
  )
}

export default FavoriteCard