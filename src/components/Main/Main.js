import React, { Fragment, useState, useEffect } from "react";
import Carrousel from "./Carrousel";
import Mostrador from "./Mostrador";
import Header from "../Layout/Header";
import Fotter from "../Layout/Fotter";
import ZeroDisclaimer from "./ZeroDisclaimer";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./main-styles.css";

import Loguito from "../Images/Zero-Images/Zero-Tech-Black.svg";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

// stilos de register REVISAR
import "./styles.css";
import axiosInstance from "../util/axiosInstance";
import NewsPanel from "./MainPanels/NewsPanel";

const Main = ({
  authen,
  setAuthen,
  usuario,
  setCarrito,
  userId,
  products,
  setProducts,
  autenticar,
}) => {
  setAuthen(localStorage.getItem("Token"));

  const fetchCarrito = async (user) => {
    const id = user;
    const response = await axiosInstance.get(`/cart/${id}`);
    if (response.data.carrito[0] === undefined) {
    } else {
      return setProducts(response.data.carrito[0].productos);
    }
  };

  useEffect(() => {
    autenticar();
  }, []);
  return (
    <Fragment>
      <Container fluid className="main-container">
        <div className="img-disclaimer-container">
          <div className="back-color"></div>
        </div>

        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={100}
          AnimationDuration={500}
          style={{ zIndex: "1", background: "#19ed18" }}
        />

        <Header
          products={products}
          authen={authen}
          setAuthen={setAuthen}
          usuario={usuario}
          setCarrito={setCarrito}
          userId={userId}
          fetchCarrito={fetchCarrito}
        />

        <Container fluid>
          <Row className="d-flex flex-column">
            <Col>
              <ZeroDisclaimer />
            </Col>
            <Col id="NewsPanel" className="mb-5">
              <NewsPanel />
            </Col>
            <Col>
              <Mostrador
                setProducts={setProducts}
                products={products}
                userId={userId}
                fetchCarrito={fetchCarrito}
                authen={authen}
              />
            </Col>
          </Row>
        </Container>
        <Fotter />
      </Container>
    </Fragment>
  );
};

export default Main;
