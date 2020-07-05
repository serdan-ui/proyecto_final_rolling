import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LoginContainer from "./LoginContainer";
import Sidebar from "./Sidebar";
import Register from "../Register/Register";
import Doodles from "../Images/various-svg/Doodles.svg";
import Loguito from "../Images/Zero-Images/Zero-Tech-Black.svg";

// estilos del componente
import "./styles.css";

const Login = () => {
  const [login, setLogin] = useState(true);

  const register = () => {
    if (login === true) {
      setLogin(false);
      return;
    } else {
      setLogin(true);
      return;
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center login-container"
    >
      <div className="img-login-container">
        <div className="back-login-color"></div>
      </div>

      <Row className="login-panel d-flex flex-column flex-md-row shadow">
        <Col className="login-graphic d-flex align-items-center justify-content-center">
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center mb-4">
              <Image src={Loguito} height="140" />
            </Col>
            <Col className="d-flex justify-content-center align-items-center mb-5">
              <h1 className="graphic-font">GAMING STORE</h1>
            </Col>
          </Row>
        </Col>
        <Col className="login-contenedor">
          <div className="botones">
            <Button type="button" className="toggle" onClick={register}>
              {login ? "Registrarse" : "Iniciar Sesion"}
            </Button>
          </div>

          {login ? <LoginContainer /> : <Register />}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
