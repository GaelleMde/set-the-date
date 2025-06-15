import { useNavigate } from "react-router-dom";
import service from "../services/service.config";
import { useState } from 'react'
import { Form } from 'react-bootstrap'

function AddEventPage() {

const navigate = useNavigate()

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
 
  const handleAddEventSubmit = async (e) => {
    e.preventDefault();
    
    const newEventData = {
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
      const addEventResponse = await service.post(`/event`, newEventData)
      navigate("/confirmation")
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
    
              <Form onSubmit={handleAddEventSubmit} id="edit-card">
    
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
               <option value="ATP">ATP</option>
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

            <Form.Group className="mb-3">
                  <Form.Label>Picture:</Form.Label>
                    <Form.Control
                type="text"
                value={ImageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
                </Form.Group>
            <button type="submit"> Save changes</button> 
                
                 </Form>
                 <hr />
          </div> 
       
      )
    }


export default AddEventPage