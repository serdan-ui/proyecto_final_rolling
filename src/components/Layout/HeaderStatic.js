import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Image,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import Loguito from "../Images/Zero-Images/Inset/Zero-Tech-White.svg";
import { FaUser, FaShareSquare } from "react-icons/fa";

const HeaderStatic = ({ authen, setAuthen, usuario }) => {
  let history = useHistory();
  const cerrarSes = () => {
    localStorage.removeItem("Token");
    setAuthen(null);
    history.push("/");
  };

  return (
    <Fragment>
      <Container fluid className="Container_Header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
          <Navbar.Brand href="/main" className="">
            <Image fluid src={Loguito} className="logo_imagen_header" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex  flex-lg-row justify-content-center navbar-desplegable">
              <Nav>
                <div className="d-flex justify-content-center mt-3 mb-2">
                  <Button
                    className="btnLogin_header btnLogin-collapse shadow"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    INICIAR SESIÓN
                  </Button>
                </div>
              </Nav>
              <Nav.Link
                href="/main"
                className="btnNav_header d-flex justify-content-center"
              >
                <Row className="d-block  align-self-center ">
                  <Col
                    xs="auto"
                    className=" d-flex justify-content-center btnNav_mainFont"
                  >
                    TIENDA
                  </Col>
                  <Col
                    xs="auto"
                    className=" d-flex justify-content-center btnNav_secondFont"
                  >
                    tech store
                  </Col>
                </Row>
              </Nav.Link>

              <Nav.Link
                href="/service"
                className="btnNav_header d-flex justify-content-center"
              >
                <Row className="d-block  align-self-center ">
                  <Col
                    xs="auto"
                    className=" d-flex justify-content-center btnNav_mainFont"
                  >
                    SERVICIOS
                  </Col>
                  <Col
                    xs="auto"
                    className=" d-flex justify-content-center btnNav_secondFont"
                  >
                    contactar
                  </Col>
                </Row>
              </Nav.Link>

              <Nav.Link
                href="/turn"
                className="btnNav_header d-flex justify-content-center"
              >
                <Row className="d-block  align-self-center ">
                  <Col
                    xs="auto"
                    className=" d-flex justify-content-center btnNav_mainFont"
                  >
                    TURNO
                  </Col>
                  <Col
                    xs="auto"
                    className=" d-flex justify-content-center btnNav_secondFont"
                  >
                    asistencia
                  </Col>
                </Row>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button
            className="btnLogin_header btnLogin-out mr-3 shadow"
            onClick={() => {
              history.push("/");
            }}
          >
            INICIAR SESIÓN
          </Button>
          </Container>
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default HeaderStatic;
