import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import GamePad from "../Images/various-svg/Gamepad-White.svg";
import Loguito from "../Images/Zero-Images/Inset/Zero-Tech-Dark-Blue.svg";

const ZeroDisclaimer = () => {
  return (
    <Container
      fluid
      className="main-disclaimer-container d-flex justify-content-center align-items-center"
    >
      <Row className="w-100 d-flex align-items-center justify-content-center justify-content-sm-start">
        <Col
          xs="12"
          lg="10"
          xl="9"
          className="d-flex justify-content-center disclaimer-panel"
        >
          <Row className="w-100 h-100 d-flex flex-column justify-content-center">
            <Col className="disclaimer-line1 d-flex align-items-center justify-content-center">
              <Row className="w-100 d-flex flex-column flex-lg-row  justify-content-center">
                <Col
                  xs="auto"
                  className="d-flex justify-content-center justify-content-lg-start"
                >
                  <Image src={Loguito} className="disclaimer-panel-logo"/>
                </Col>
                <Col className="d-flex justify-content-center justify-content-lg-start align-items-center">
                  <h1 className="disclaimer-panel-titulo text-justify text-center">GAMING STORE</h1>
                </Col>
              </Row>
            </Col>
            <Col className="disclaimer-line2 d-flex justify-content-center justify-content-lg-start">
              <h3 className="w-75 disclaimer-panel-descripcion mb-5 text-justify text-center text-md-left">
                Somos una tienda especializada en Gaming. Asesorando, ofreciendo
                e incitando a las personas a entrar en la industria que más
                creció en los últimos 10 años.
              </h3>
            </Col>
          </Row>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </Container>

    /* <Container
      fluid
      className="main-disclaimer-container d-flex justify-content-center align-items-center"
    >
      <Row className="h-75 d-flex flex-column disclaimer-panel justify-content-center">
        <Col className="disclaimer-line1 d-flex align-items-center justify-content-center">
          <Row className="w-100 d-flex flex-column flex-lg-row  justify-content-center">
            <Col
              xs="auto"
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <Image src={Loguito} className="line1-logo" />
            </Col>
            <Col className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <h1 className="line1-title">GAMING STORE</h1>
            </Col>
          </Row>
        </Col>
        <Col className="disclaimer-line2 d-flex justify-content-center justify-content-lg-start">
          <h3 className="w-50 line2-description">
            Somos una tienda especializada en Gaming. Asesorando, ofreciendo e
            incitando a las personas a entrar en la industria que más creció en
            los últimos 10 años.
          </h3>
        </Col>
      </Row>
    </Container> */
  );
};

export default ZeroDisclaimer;
