import React, { useState } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import "./styles.css";

const ProductCard = (props) => {
    
  


  return (
    <Container className="mt-2 mb-3 product-card border">
      <Row className="mt-2">
        <Col sm="4" className="d-flex justify-content-center align-items-center">
        <Image className="imagen-card" src={props.imagen} rounded fluid />
        </Col>
        <Col sm="8" className="mt-2">
          <Row className="d-flex flex-column">
            <Col>
              <h4>{props.nombre}</h4>
            </Col>
            <Col>
              <h6>{props.descripcion}</h6>
            </Col>
            <Col className="d-flex justify-content-between">
              <h5>{"$" + (props.precio)}</h5>
              <input className="mb-1 text-center" placeholder={props.cantidad} type="number" min="1" max="9" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
