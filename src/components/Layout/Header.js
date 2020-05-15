import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <Container fluid className="Container_Header">
      <Row className="container_logo">
        <Col xs={3} className="logo">
          logo
        </Col>
        <Col xs={9} className="login_registro_header">
          <Button className="btnLogin_header"> Iniciar sesion</Button>
          <Button className="btnCart_header"> Carrito</Button>
        </Col>
      </Row>
      <Nav className="justify-content-center nav_header" >
        <Nav.Item className="nav_header" >
          <Link to="/shopping-cart" className="btnNav_header">Tienda</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/service" className="btnNav_header">Turno</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/main" className="btnNav_header">Consulta</Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Header;
