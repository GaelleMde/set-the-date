import UpcomingEventCard from "../components/UpcomingEventCard"
import { useEffect } from "react"
import { useState } from "react"
import service from "../services/service.config"
import SearchBar from "../components/SearchBar"
import AllEventCard from "../components/AllEventCard"

function AllEventPage() {

const [searchInputValue, setSearchInputValue] = useState("")
const [allEvent, setAllEvent] = useState([])
const [allFavorites, setAllFavorites] = useState([])


/*  const getData = async () => {

    const getEvents = async () => {
    try {
    const AllEvents = await service.get(`/event`)
    console.log(AllEvents.data)
    setAllEvent(AllEvents.data)
    } catch (error) {
    console.log(error)
    }
  }

    const getFavorites = async () => {
    try {
      const response = await service.get(`user/favorite`)
      console.log(response.data.favorites)
      setAllFavorites(response.data.favorites) // almacenamos la data en setAllFavorites
    } catch (error) {
      console.log(error)
    }
  }
} */


const getData = async () => {

  try {
    const AllEvents = await service.get(`/event`)
    console.log(AllEvents.data)
    setAllEvent(AllEvents.data)

    const response = await service.get(`user/favorite`)
    console.log(response.data.favorites)
    setAllFavorites(response.data.favorites)
    
  } catch (error) {
    console.log(error)
  }

}
    
useEffect(() => {
getData()
  }, [])


  
  return (
    <div className = "all-event-page">
      <div className = "prueba">
        <SearchBar searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} />

     {allEvent.length === 0 ? (
        <p>No tournaments yet 🥲</p>
      ) : (
       <div className = "all-event-container" >

      {allEvent
      .filter((eachEvent) => {
        if (eachEvent.name.startsWith(searchInputValue)) {
            return true
    }
           return eachEvent.name
              .toLowerCase()
              .startsWith(searchInputValue.toLowerCase());
          

      })
      .map((eachEvent) => (
        <AllEventCard key={eachEvent._id} eachEvent={eachEvent} searchInputValue={searchInputValue} favorites={allFavorites} getData={getData}/>

      ))      }


</div>
      )}    
    </div>
    </div>
  )
}

export default AllEventPage

