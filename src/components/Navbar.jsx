import React, { useContext } from "react";
import { Authcontext } from "../context/auth.context";
import { useNavigate, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyNavbar() {
  const { role } = useContext(Authcontext);
  const { isLoggedIn } = useContext(Authcontext);
  const navigate = useNavigate();
  const { authenticateUser } = useContext(Authcontext);

  const handleAddEvent = () => {
    navigate(`/event/new`);
  };

  const handleAllEvent = () => {
    navigate(`/event/all`);
  };
  const handleFavorite = () => {
    navigate(`/favorite`);
  };

  const handleLogin = () => {
    navigate(`/login`)
  }

  const handleLogout = async () => {
    localStorage.removeItem("authToken");

    try {
      //el token no existe, la funcion cmabia los estados del contexto para indicar que el usuario ya no está logeado
      await authenticateUser();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar expand="lg" id="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-title">
        <img
          src="/Logo.svg"
          alt="Set the date logo"
          style={{ height: "40px" }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
            <Nav.Link onClick={handleAllEvent}> All tournaments </Nav.Link>
          

          {isLoggedIn === true && (
            <Nav.Link onClick={handleFavorite}> My Favorites ❤️</Nav.Link>
          )}

          {role === "admin" && (
            <Nav.Link onClick={handleAddEvent}>➕ New Tournament</Nav.Link>
          )}

          {isLoggedIn === true && (
            <Nav.Link onClick={handleLogout}>
              Log out{" "}
              <i
                className="bi bi-box-arrow-right"
                style={{ marginLeft: "8px" }}
              ></i>
            </Nav.Link>
          )}

          {isLoggedIn === false && (
            <Nav.Link onClick={handleLogin}> Log in/Sign Up</Nav.Link>
          )}

      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
