import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CuponModal from "./cupon-modal";
import "./styles.css";

const ResumenCompra = () => {
  return (
    <Container>
      <Row className="d-flex flex-column">
        <Col className="d-flex align-items-end border-bottom">
          <h3>Resumen</h3>
        </Col>
        <Col className="mb-3 border-bottom">
          <div className="mt-3 mb-3 d-flex justify-content-center">
            <CuponModal />
          </div>
        </Col>
        <Col className="">
          <Row className="d-flex flex-column border-bottom">
            <Col className="mb-2 d-flex justify-content-between">
              <h5>SUBTOTAL</h5>
              <h5>$500</h5>
            </Col>
            <Col className="mb-2 d-flex justify-content-between">
              <h5>Envío</h5>
              <h5>$500</h5>
            </Col>
            <Col className="mb-3 d-flex justify-content-between">
              <h5>Impuestos</h5>
              <h5>$500</h5>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-between">
              <h4>TOTAL</h4>
              <h4>$1500</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumenCompra;
