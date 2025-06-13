import React, { useContext } from 'react'
import { Authcontext } from '../context/auth.context'
import { useNavigate, Link } from 'react-router-dom'


function MyNavbar() {

    const {isLoggedIn} = useContext(Authcontext)
    const navigate = useNavigate()
    const {authenticateUser} = useContext(Authcontext)

    const handleLogout = async () => {

    localStorage.removeItem("authToken")

try {
    //el token no existe, la funcion cmabia los estados del contexto para indicar que el usuario ya no está logeado
    await authenticateUser() 

    navigate("/")

} catch (error) {
   console.log(error) 
}

}

  return (
    <nav>

    {isLoggedIn === true && (
     <button onClick={handleLogout}>Log out</button>
    )}

    </nav>
  ) 
}

export default MyNavbar;