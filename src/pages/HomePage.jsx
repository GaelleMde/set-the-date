import { useContext, useEffect, useState } from 'react'
import {Authcontext} from '../context/auth.context'
import service from '../services/service.config'
import FavoriteCard from '../components/FavoriteCard'
import UpcomingEventCard from '../components/UpcomingEventCard'
import { Link } from 'react-router-dom'



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


/*   if (allFavorites === null) {
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
  } */

     if (allFavorites === null || allUpcomingEvent === null) {
    return <p>Loading your data... ⏳</p>;
  }



  return (
    <div>
      
      <h1>Homepage</h1>
      <h2>My favorites events</h2>
            <Link to="/favorite">
        <h6>View all my favorites</h6>
      </Link>
      

      {allFavorites.length === 0 ? (
        <p>You don’t have any favorite tournaments saved yet 🎾</p>
      ) : (
     allFavorites.map((eachFavorite) => (
         <FavoriteCard key={eachFavorite._id} eachFavorite={eachFavorite}/>
        )))} 

      <h2>Upcoming event</h2>
      
      {allUpcomingEvent.length === 0 ? (
        <p>No upcoming events scheduled yet 🥲</p>
      ) : (

        <div className="upcoming-card-container">

      {allUpcomingEvent.map((eachUpcomingEvent) => (
        <UpcomingEventCard key={eachUpcomingEvent._id} eachUpcomingEvent={eachUpcomingEvent}/>
      ))}
</div>
      )} 
      
    { role === "admin" && <button>Only for Admin</button>}
    </div>
  )
}

export default HomePage

