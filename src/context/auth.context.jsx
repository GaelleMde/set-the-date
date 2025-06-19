import { createContext, useEffect } from "react";
import { useState } from "react";
import service from "../services/service.config";
import Spinner from 'react-bootstrap/Spinner';

// componente que comparte los estados del contexto por toda la app
const Authcontext = createContext();

// el componente que almacena ty controla los estados del contexto
function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [role, setRole] = useState(null);
  const [isValidatingToken, setIsValidatingToken] = useState(true);

  const authenticateUser = async () => {
    //function para validar el token dle usuario y saber quien es y actualizar los estados

    try {
      const response = await service.get(`auth/verify`);

      // si la llamada llega a este punto significa que el backend validó el token
      setIsLoggedIn(true);
      setLoggedUserId(response.data.payload._id);
      setRole(response.data.payload.role);
      setIsValidatingToken(false);
    } catch (error) {
      console.log(error);
      // si la llamada llega a este punto significa que el token no existe, no es valido o expiró
      setIsLoggedIn(false);
      setLoggedUserId(null);
      setRole(null);
      setIsValidatingToken(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  // Contexto que compartimos para tener a mano el estado y funciones de usuario en toda la app
  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser,
    role,
  };

  if (isValidatingToken) {
    return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status">
      </Spinner>
      <p className="mt-3">Please wait a few minutes... the server is waking up 💤</p>
    </div>
    );
  }

  return (
    <Authcontext.Provider value={passedContext}>
      {props.children}
    </Authcontext.Provider>
  );
}

export { Authcontext, AuthWrapper };
