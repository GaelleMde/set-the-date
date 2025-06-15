import React, { useContext } from "react";
import { Authcontext } from "../context/auth.context";
import { useNavigate, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  const { isLoggedIn } = useContext(Authcontext);
  const navigate = useNavigate();
  const { authenticateUser } = useContext(Authcontext);

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
    <Navbar style={{ backgroundColor: "#1e90ff" }}>
      <Navbar.Brand as={Link} to="/" className="navbar-title">
        <h2>Set the date</h2>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="me-auto">

          {isLoggedIn === true && (
            <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
          )}
          <Nav.Link>Log out</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
