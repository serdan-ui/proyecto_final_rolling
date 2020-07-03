import React, { Fragment } from "react";
import HeaderStatic from "../Layout/HeaderStatic";
import Fotter from "../Layout/Fotter";
import ZeroDisclaimer from "./ZeroDisclaimer";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import Loguito from "../Images/Zero-Images/Zero-Tech-Black.svg";

const MainTest = () => {
  return (
    <Fragment>
      <Container fluid className="main-container">
        <div className="img-disclaimer-container">
          <div className="back-color"></div>
        </div>
        <HeaderStatic />
        <Container fluid>
          <Row>
            <ZeroDisclaimer/>
          </Row>
        </Container>
        <Fotter />
      </Container>
    </Fragment>
  );
};

export default MainTest;
