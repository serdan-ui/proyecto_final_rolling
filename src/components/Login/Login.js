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

      <Row className="login-panel  d-flex flex-column justify-content-center align-items-center flex-md-row shadow">
        <Col className="login-graphic d-flex align-items-center justify-content-center">
          <Row className=" h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <Col className=" d-flex justify-content-center align-items-end">
              <Image id="LoginLogo" src={Loguito} height="140" />
            </Col>
            <Col className="d-flex justify-content-center align-items-start">
              <h1
                id="LoginTitle"
                className="graphic-font text-center text-justify"
              >
                GAMING STORE
              </h1>
            </Col>
          </Row>
        </Col>
        <Col className=" login-contenedor  shadow d-flex align-items-start align-items-sm-center justify-content-center">
          <Row className="mb-5 d-flex flex-column justify-content-center w-100 ">
            <Col xs="auto" className="mb-2 mt-3">
              {login ? <LoginContainer /> : <Register />}
            </Col>
            <Col xs="auto" className="mt-5 d-flex justify-content-center">
              <Button type="button" id="BtnRegistro" className="toggle shadow" onClick={register}>
                {login ? "Registrarse" : "Iniciar Sesion"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
