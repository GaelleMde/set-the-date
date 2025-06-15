import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../services/service.config'

function EditEventPage() {

const [imageUrl, setImageUrl] = useState("")
const [name, SetName] = useState("")
const [city, setCity] = useState("")
const [location, setLocation] = useState("")
const [starDate, setStartDate] = useState("")
const [endDate, setEndDate] = useState("")
const [currentChampion, setcurrentChampion] = useState("")
const [surface, setsurface] = useState("")
const [level, setLevel] = useState("")
const [prizeMoney, setPrizeMoney] = useState("")

const params = useParams()
const navigate = useNavigate

useEffect(()=>{
 editEvent()
}, [])

const editEvent = async () => {
    const eventResponse = await service.put(`/event/:${params.eventId}`)
    console.log(eventResponse)
}




  return (
    <div>EditEventPage</div>
  )
}

export default EditEventPage