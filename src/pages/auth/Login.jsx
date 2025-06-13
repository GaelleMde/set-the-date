import React, { useContext } from 'react'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/auth.context';

function Login() {

  const {authenticateUser } = useContext (Authcontext)
  
  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ... contactar al backend para validar credenciales de usuario aqui
    const userCredentials = {
    email, 
    password
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, userCredentials)
    console.log("User successfully validated from the backend", response)

    //almacenamos el token en localStorage
    localStorage.setItem("authToken", response.data.authToken)
    //crear el contexto y actualizar los estados del contexto
    await authenticateUser ()
    // redirecionamos al usuario a alguna pagina privada
    navigate("/homepage")







  } catch (error) {
    console.log(error)
    if (error.response.status === 400) {
      setErrorMessage(error.response.data.errorMessage)
    }   else {
    navigate('/error')
  }
}};
  

  return (
    <div>

      <h1>Login</h1>

      {errorMessage &&  <p>{errorMessage}</p>}
       

      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <button type="submit">Login</button>
      </form>
      
    </div>
  );
}

export default Login;

