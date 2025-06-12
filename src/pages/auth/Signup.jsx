import React from 'react'
import { useState } from 'react';
import axios from "axios"

function Signup() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    // ... contactar al backend para registrar al usuario aqui
try {

    const newUser = {
        name, 
        email, 
        password
    }
    console.log(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`)
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, newUser)

    console.log("todo bien, el backend respondio", response)


} catch (error) {
    console.log(error)
    if(error.response.data === 400) {
        console.log(error.response.data.errorMessage)
    }
    // poner pagina de error
}

  };
  return (
    <div>
              <h1>Formulario de Registro</h1>
    
      <form onSubmit={handleSignup}>

        <label>Correo Electronico:</label>
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

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default Signup