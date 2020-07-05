import React, { Fragment, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Image,
  Navbar,
  NavDropdown,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import Loguito from "../Images/Zero-Images/Inset/Zero-Tech-White.svg";
import BtnCart from "./BtnCart";
import {
  FaUser,
  FaShareSquare,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";

const Header = ({
  products,
  authen,
  setAuthen,
  usuario,
  setCarrito,
  userId,
  setProducts,
  fetchCarrito,
  autenticar,
}) => {
  let history = useHistory();
  const cerrarSes = () => {
    localStorage.removeItem("Token");
    setAuthen(null);
    history.push("/");
  };

  useEffect(() => {
    fetchCarrito(userId);
    return () => {
      //
    };
  }, [usuario]);

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
              <Nav className="d-flex flex-lg-row justify-content-center align-items-center navbar-desplegable">
                {authen ? (
                  <div className="btnLogin-collapse w-100">
                  <Nav
                    className="btnNav_header btnUsername d-flex justify-content-center w-100"
                  >
                    <Row className="d-block  align-self-center ">
                      <Col
                        xs="auto"
                        className="d-flex justify-content-center btnNav_usernameFont"
                      >
                        {usuario.username}
                      </Col>
                      <Col
                        xs="auto"
                        className="d-flex justify-content-center btnNav_secondFont"
                      >
                        usuario
                      </Col>
                    </Row>
                  </Nav>
                  </div>
                ) : (
                  <Button
                    className="btnLogin_header btnLogin-collapse shadow"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    INICIAR SESIÓN
                  </Button>
                )}

                <Nav.Link
                  href="/main"
                  className="btnNav_header d-flex justify-content-center w-100"
                >
                  <Row className="d-block  align-self-center ">
                    <Col
                      xs="auto"
                      className=" d-flex justify-content-center btnNav_mainFont "
                    >
                      TIENDA
                    </Col>
                    <Col
                      xs="auto"
                      className=" d-flex justify-content-center btnNav_secondFont "
                    >
                      tech store
                    </Col>
                  </Row>
                </Nav.Link>

                <Nav.Link
                  href="/service"
                  className="btnNav_header d-flex justify-content-center w-100"
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
                  className="btnNav_header d-flex justify-content-center w-100"
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

            <Nav className="btnLogin-out">
              {authen ? (
                <Dropdown
                  as={ButtonGroup}
                  className="btnNav_header btnUsername"
                >
                  <Row className="ml-3">
                    <Col xs="auto" className="d-flex">
                      <Row className="d-block  align-self-center">
                        <Col
                          xs="auto"
                          className=" d-flex justify-content-center btnNav_usernameFont"
                        >
                          {usuario.username}
                        </Col>
                        <Col
                          xs="auto"
                          className=" d-flex justify-content-center btnNav_secondFont"
                        >
                          usuario
                        </Col>
                      </Row>
                    </Col>
                    <Col xs="auto" className="d-flex">
                      <Dropdown.Toggle
                        split
                        id="dropdown-split-basic"
                        className="btnDropdown-username"
                      />
                    </Col>
                  </Row>
                  <Dropdown.Menu id="DropDown-username">
                    <Dropdown.Item className="dropDown-font" href="#/action-1">
                      Perfil
                    </Dropdown.Item>
                    <Dropdown.Item className="dropDown-font" href="/shopping-checkout">
                      Ir al Carrito
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      className="font-weight-bolder dropDown-cerrarSesion"
                      onClick={cerrarSes}
                    >
                      Cerrar Sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  className="btnLogin_header btnLogin-out mr-3 shadow"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  INICIAR SESIÓN
                </Button>
              )}
            </Nav>
          </Container>
        </Navbar>
        <BtnCart
          products={products}
          setCarrito={setCarrito}
          userId={userId}
          fetchCarrito={fetchCarrito}
        />
      </Container>
    </Fragment>
  );
};

export default Header;
