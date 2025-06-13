import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";


// componente que comparte los estados del contexto por toda la app
const Authcontext = createContext()

// el componente que almacena ty controla los estados del contexto
function AuthWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [ loggedUserId, setLoggedUserId ] = useState(null)
    const [ role, setRole ] = useState(null)
    const [ isValidatingToken, setIsValidatingToken ] = useState(true)

    const authenticateUser = async () => {
        //function para validar el token dle usuario y saber quien es y actualizar los estados
        
    

        const authToken = localStorage.getItem("authToken")

        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/verify`, {
            headers: {
                authorization: `Bearer ${authToken}` 
            }
            })

            // si la llamada llega a este punto significa que el backend validó el token
            setIsLoggedIn(true)
            setLoggedUserId(response.data.payload._id)
            setIsValidatingToken(false)

        } catch (error) {
            console.log(error)
            // si la llamada llega a este punto significa que el token no existe, no es valido o expiró
            setIsLoggedIn(false)
            setLoggedUserId(null)
            setIsValidatingToken(false)
        }
    }

    useEffect(()=>{
        authenticateUser()
    }, [])

    // Contexto que compartimos para tener a mano el estado y funciones de usuario en toda la app
    const passedContext = {
        isLoggedIn,
        loggedUserId,
        authenticateUser, 
        role, 
    }

    if (isValidatingToken) {
      return (
        <h3>...Validating user</h3>
      )  
    }

    return (
        <Authcontext.Provider value = {passedContext}>
            {props.children}
        </Authcontext.Provider>
    )
}

export {
    Authcontext, 
    AuthWrapper
}