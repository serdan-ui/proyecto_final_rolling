import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";

const PagoPendiente = () => {
  return (
    <>
      <div className="loading">
        <div>
          <Container>
            <Row className="conteniendo2">
              <Col xl={7} lg={7} md={7} className="volverApag">
                <h2 className="pendiente">El pago esta siendo procesado</h2>
              </Col>
              <Col className="contenedor-boton"></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default PagoPendiente;
