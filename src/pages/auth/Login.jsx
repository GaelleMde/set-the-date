import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/auth.context";
import service from "../../services/service.config";
import Form from "react-bootstrap/Form";
import "../auth/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const { authenticateUser } = useContext(Authcontext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ... contactar al backend para validar credenciales de usuario aqui
    const userCredentials = {
      email,
      password,
    };

    try {
      const response = await service.post(`/auth/login`, userCredentials);
      console.log("User successfully validated from the backend", response);

      //almacenamos el token en localStorage
      localStorage.setItem("authToken", response.data.authToken);

      //crear el contexto y actualizar los estados del contexto
      await authenticateUser();
      // redirecionamos al usuario a alguna pagina privada
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
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
        <Form onSubmit={handleLogin} className="container-form">
          <h1>Welcome back</h1>
          <p>Please log in to continue</p>
        <div className="preset-account">
          <p>To make things easy, you can log in directly using one of these preset accounts, no need to create a new user:</p>
           <li>
            <strong>Admin:</strong>serena@serena.com / Password123!
            </li>
            <li><strong>User:</strong>billie@email.com / Password456!</li>
</div>
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
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />{" "}
          </Form.Group>

          <br />
    
          <button type="submit">Login</button>
          <div className="signup-text">
            <h6>Don't have an account yet?</h6>
            <Link to="/signup">Sign up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
