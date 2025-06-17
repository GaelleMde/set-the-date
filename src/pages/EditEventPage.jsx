import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../services/service.config'
import { Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';

function EditEventPage() {

const [isUploading, setIsUploading] = useState(false);

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

const handleFileUploadEdit = async (event) => {
  // console.log("The file to be uploaded is: ", e.target.files[0]);

  if (!event.target.files[0]) {
    // to prevent accidentally clicking the choose file button and not selecting a file
    return;
  }

  setIsUploading(true); // to start the loading animation

  const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
  uploadData.append("image", event.target.files[0]);
  //                   |
  //     this name needs to match the name used in the middleware in the backend => uploader.single("image")

  try {
    const response = await service.post("http://localhost:5006/api/upload", uploadData)
    // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

    setImageUrl(response.data.ImageUrl);
    //                          |
    //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

    setIsUploading(false); // to stop the loading animation
  } catch (error) {
    navigate("/error");
  }
};








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


          <Form.Group className="mb-3">
                  <Form.Label>Picture:</Form.Label>
                    <Form.Control
              type="file"
              name="image"
              onChange={handleFileUploadEdit}
              disabled={isUploading}
              />
                </Form.Group> 


  {isUploading && <div className="mt-2 text-muted">Uploading image...</div>}

    {ImageUrl && (
    <div className="mt-3">
      <img src={ImageUrl} alt="uploaded" width={200} style={{ borderRadius: 8 }} />
    </div>)}

        <button type="submit"> Save changes</button> 
            
             </Form>
             <hr />
      </div> 
   
  )
}

export default EditEventPage