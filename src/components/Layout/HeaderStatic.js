import React from "react";
import { Container, Row, Col, Nav, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import Loguito from "../Images/zerote.png";
import { FaUser, FaShareSquare } from "react-icons/fa";

const HeaderStatic = ({authen, setAuthen}) => {
  const cerrarSes = () => {
    localStorage.removeItem("Token")
    setAuthen(null)
  }

  return (
    <Container fluid className="Container_Header">
      <Row className="container_logo"  style={{padding:"0px", margin:"0px"}}>
        <Col xs={4} md={3} className="logo">
          <Image src={Loguito} rounded className="logo_imagen_header" />
        </Col>
        <Col xs={7} md={9} className="login_registro_header">
        {authen ? (
            <>
            <span><FaUser className="icons_header" />Hola : ${} </span>

              <Button
                className="btnLogin_header_logout mr-2"
                style={{border:"none"}}
                onClick={cerrarSes}
              >
                {" "}
                < FaShareSquare/>
              </Button>
            </>
          ) : (
            <Button
              className="btnLogin_header mr-2"
              href="http://localhost:3000/"
            >
              {" "}
              <FaUser className="icons_header" />
              Iniciar sesion
            </Button>
          )}
        </Col>
      </Row>

      <Nav className="justify-content-center nav_header">
        <Nav.Item className="nav_header">
          <Link to="/main" className="btnNav_header">
            Tienda
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/service" className="btnNav_header">
            Servicios
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/turn" className="btnNav_header">
            Turno
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default HeaderStatic;
