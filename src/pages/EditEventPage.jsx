import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../services/service.config'
import { Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';

function EditEventPage() {

const [ImageUrl, setImageUrl] = useState("")
const [name, setName] = useState("")
const [city, setCity] = useState("")
const [location, setLocation] = useState("")
const [country, setCountry] = useState("")
const [startDate, setStartDate] = useState("")
const [endDate, setEndDate] = useState("")
const [currentChampion, setCurrentChampion] = useState("")
const [category, setCategory] = useState("")
const [surface, setSurface] = useState("")
const [level, setLevel] = useState("")
const [prizeMoney, setPrizeMoney] = useState("")

const params = useParams()
const navigate = useNavigate()

useEffect(()=>{
getEvent()

 
}, [])

const getEvent = async () => {
 const eventResponse = await service.get(`/event/${params.eventId}`)
    try {
    console.log(eventResponse.data)
    setImageUrl(eventResponse.data.ImageUrl)
    setName(eventResponse.data.name)  
    setCity(eventResponse.data.city)  
    setLocation(eventResponse.data.location) 
    setCountry (eventResponse.data.country) 
    setStartDate(eventResponse.data.startDate)  
    setEndDate(eventResponse.data.endDate)  
    setCurrentChampion(eventResponse.data.currentChampion)  
    setCategory(eventResponse.data.category)  
    setSurface(eventResponse.data.surface)  
    setLevel(eventResponse.data.level)  
    setPrizeMoney(eventResponse.data.prizeMoney)  
    } catch (error) {
        console.log(error)
    }
}

/* const editEvent = async () => {
    const eventResponse = await service.put(`/event/:${params.eventId}`)
    console.log(eventResponse)
} */

const handleFormSubmit = async (e) => {
    e.preventDefault()

const updatedEvent = {
    ImageUrl, 
    name, 
    city, 
    location,
    country,
    startDate,
    endDate, 
    currentChampion,
    category,
    surface,
    level,
    prizeMoney, 
}

try {
    const updatedEventResponse = await service.put(`/event/${params.eventId}`, updatedEvent)
    console.log(updatedEventResponse)
    navigate(`/event/${params.eventId}`)
} catch (error) {
    console.log(error)
}
}



  return (
    <div id="EventDetailsPage">

           <img
            src={ImageUrl}
            alt={`Image of ${name}`}
            style={{ width: "100%",   height: "300px" ,  objectFit: "cover", objectPosition: "center"}}
          />

          <Form onSubmit={handleFormSubmit} id="edit-card">

             <Form.Group className="mb-3">
                <Form.Label>Tournament's name:</Form.Label>
                <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            </Form.Group>

         <Form.Group className="mb-3">
        <Form.Label>Category:</Form.Label>
            <Form.Select
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
           <option value="WTA">WTA</option>
           <option value="APT">ATP</option>
           </Form.Select>
            </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City:</Form.Label>
                <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
            </Form.Group>
            
               <Form.Group className="mb-3">
              <Form.Label>Country:</Form.Label>
                <Form.Control
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
            </Form.Group>

               <Form.Group className="mb-3">
              <Form.Label>Location:</Form.Label>
                <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start date:</Form.Label>
                <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
            </Form.Group>

        <Form.Group className="mb-3">
              <Form.Label>End Date:</Form.Label>
                <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
            </Form.Group>


         <Form.Group className="mb-3">
              <Form.Label>Current champion</Form.Label>
                <Form.Control
            type="text"
            value={currentChampion}
            onChange={(e) => setCurrentChampion(e.target.value)}
          />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Surface:</Form.Label>
            <Form.Select
            type="text"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
          >
           <option value="Hard">Hard</option>
           <option value="Clay">Clay</option>
           <option value="Grass">Grass</option>
           </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Level:</Form.Label>
            <Form.Select
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
           <option value="Grand Slam">Grand Slam</option>
           <option value="1000">1000</option>
           <option value="500">500</option>
           <option value="250">250</option>
           </Form.Select>
            </Form.Group>


        <Form.Group className="mb-3">
              <Form.Label>Prize Money:</Form.Label>
                <Form.Control
            type="number"
            value={prizeMoney}
            onChange={(e) => setPrizeMoney(e.target.value)}
          />
            </Form.Group>
        <button type="submit"> Save changes</button> 
            
             </Form>
             <hr />
      </div> 
   
  )
}

export default EditEventPage