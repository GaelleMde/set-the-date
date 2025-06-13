import { useContext } from "react"
import { Authcontext } from "../context/auth.context"
import { Navigate } from "react-router-dom"

function OnlyPrivate(props) {

const {isLoggedIn} = useContext (Authcontext)

if (isLoggedIn) {
    // el user está logeado, continua con la pagina privada
    return props.children
} else {
    // User no está logeado, redireccionamos al homepage
return <Navigate to="/" />
}

  
    
  
}

export default OnlyPrivate