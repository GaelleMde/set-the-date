import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/service.config";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    // ... contactar al backend para registrar al usuario aqui
    try {
      const newUser = {
        // Es el object que queremos que cree el servidor
        name,
        email,
        password,
      };

      const response = await service.post(`/auth/signup`, newUser);

      console.log("todo bien, el backend respondio", response);
      navigate("/login"); // ******CAMBIAR - REDIRRECION DESPUES DE HACER SIGN UP *******
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        // para mostras los errores 400 de cliente
        console.log(error.response.data.errorMessage);
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };
  return (
    <div className="login-main">
      <div className="left-part">
        <img src="/Landing.svg" alt="tennis ball" className="image-login" />
      </div>

      <div className="form-part">
        <Form onSubmit={handleSignup} className="container-form">
          <h1>Welcome aboard!</h1>
          <p>Create an account to get started</p>

          {errorMessage && <p style={{ color: '#ff6b6b', fontWeight: 700 }}>{errorMessage}</p>}

          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />{" "}
          </Form.Group>

          <br />
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <br />
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />{" "}
          </Form.Group>

          <br />

          <button type="submit">Sign up</button>
          <div className="signup-text">
            <h6>Already have an account?</h6>
            <Link to="/">Log in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
