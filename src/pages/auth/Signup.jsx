import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    // ... contactar al backend para registrar al usuario aqui
try {

    const newUser = { // Es el object que queremos que cree el servidor
        name, 
        email, 
        password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, newUser)


    console.log("todo bien, el backend respondio", response)
    navigate("/") // ******CAMBIAR - REDIRRECION DESPUES DE HACER SIGN UP *******

} catch (error) {
    console.log(error)
    if(error.response.status === 400) {
      // para mostras los errores 400 de cliente
        console.log(error.response.data.errorMessage)
        setErrorMessage(error.response.data.errorMessage)
    }  else {
    navigate('/error')
  
}}

  };
  return (
    <div>
              <h1>Sign up</h1>
    
      <form onSubmit={handleSignup}>

      {errorMessage &&  <p>{errorMessage}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Name:</label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={handleNameChange}
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

        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Signup;