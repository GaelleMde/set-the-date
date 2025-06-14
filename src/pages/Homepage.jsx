import React, { useContext, useEffect, useState } from 'react'
import {Authcontext} from '../context/auth.context'
import service from '../services/service.config'
import FavoriteCard from '../components/FavoriteCard'
import UpcomingEventCard from '../components/UpcomingEventCard'



function HomePage() {

  const {role} = useContext(Authcontext)
   
  const [allFavorites, setAllFavorites] = useState(null)
  const [allUpcomingEvent, setAllUpcomingEvent] = useState(null)

  useEffect(()=> {
getFavorites()
getUpcomingEvents()
  }, [])

  const getFavorites = async () => {
    try {
      const favorites = await service.get(`user/favorite`)
      console.log(favorites.data.favorites)
      setAllFavorites(favorites.data.favorites) // almacenamos la data en setAllFavorites
    } catch (error) {
      console.log(error)
    }
  }

  const getUpcomingEvents = async () => {
    try {
      const upcomingEvents = await service.get(`/event`)
      console.log(upcomingEvents.data)
      setAllUpcomingEvent(upcomingEvents.data)
    } catch (error) {
      console.log(error)
    }
  }

  // loading handler here


  if (allFavorites === null) {
    return <p>Loading your favorite tennis tournaments... 🎾</p>;
  }

  if (allFavorites.length === 0) {
    return <p>You don’t have any favorite tournaments saved yet 🎾</p>;
  }

   if (allUpcomingEvent.length === 0) {
    return <p>No upcoming events scheduled yet 🥲</p>;
  }

   if (allUpcomingEvent  === null) {
    return <p> Loading upcoming tennis events...⏳</p>;
  }



  return (
    <div>
      
      <h1>Homepage</h1>
      <h2>My favorites events</h2>


     {allFavorites.map((eachFavorite) => (
         <FavoriteCard key={eachFavorite._id} eachFavorite={eachFavorite}/>
        ))} 

      <h2>Upcoming event</h2>
       <div className = "upcoming-event-container"
    style = {{
    display: "flex",        
    flexDirection: "row"
    }}
    
    >
      {allUpcomingEvent.map((eachUpcomingEvent) => (
        <UpcomingEventCard key={eachUpcomingEvent._id} eachUpcomingEvent={eachUpcomingEvent}/>
      ))}
</div>
      
    { role === "admin" && <button>Only for Admin</button>}
    </div>
  )
}

export default HomePage

