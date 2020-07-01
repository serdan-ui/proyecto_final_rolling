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
import Loguito from "../Images/Zero-Images/Zero-Black.svg";
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
        <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Navbar.Brand href="/main" className="">
            <Image fluid src={Loguito} className="logo_imagen_header" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="d-flex flex-column-reverse flex-lg-row justify-content-center">
              
              <Nav.Link href="/main" className="btnNav_header d-flex justify-content-center align-items-center">
                Tienda
              </Nav.Link>

              <Nav.Link href="/service" className="btnNav_header d-flex justify-content-center align-items-center">
                Servicios
              </Nav.Link>

              <Nav.Link href="/turn" className="btnNav_header d-flex justify-content-center align-items-center">
                Turno
              </Nav.Link>

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
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default HeaderStatic;
