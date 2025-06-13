import { createContext, useEffect } from "react";
import { useState } from "react";
import service from "../services/service.config";


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

        try {
            const response = await service.get(`auth/verify`)
            

            // si la llamada llega a este punto significa que el backend validó el token
            setIsLoggedIn(true)
            setLoggedUserId(response.data.payload._id)
            setRole(response.data.payload.role)
            setIsValidatingToken(false)

        } catch (error) {
            console.log(error)
            // si la llamada llega a este punto significa que el token no existe, no es valido o expiró
            setIsLoggedIn(false)
            setLoggedUserId(null)
            setRole(null)
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