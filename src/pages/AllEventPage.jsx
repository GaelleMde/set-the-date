import UpcomingEventCard from "../components/UpcomingEventCard"
import { useEffect } from "react"
import { useState } from "react"
import service from "../services/service.config"
import SearchBar from "../components/SearchBar"
import AllEventCard from "../components/AllEventCard"

function AllEventPage() {

const [searchInputValue, setSearchInputValue] = useState("")
const [allEvent, setAllEvent] = useState([])

    const getEvents = async () => {
    try {
    const AllEvents = await service.get(`/event`)
    console.log(AllEvents.data)
    setAllEvent(AllEvents.data)
    } catch (error) {
    console.log(error)
    }
  }


    useEffect(() => {
    getEvents()
  }, [])

  return (
    <div>

        <SearchBar searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue}/>

     {allEvent.length === 0 ? (
        <p>No upcoming events scheduled yet 🥲</p>
      ) : (
       <div className = "upcoming-event-container"
    style = {{
    display: "flex",        
    flexDirection: "row"
    }}
    >
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
        <AllEventCard key={eachEvent._id} eachEvent={eachEvent} searchInputValue={searchInputValue} />
      ))}
</div>
      )}    
    
    </div>
  )
}

export default AllEventPage

