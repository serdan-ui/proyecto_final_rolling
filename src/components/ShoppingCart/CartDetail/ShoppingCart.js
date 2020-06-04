import React, { useState } from "react";
import ListaProductos from "./lista-productos";
import Tabla from "./resumen-compra";
import { Col, Row, Container, Button } from "react-bootstrap";

// stilos de register
import "./styles.css";

const ShoppingCart = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5 d-flex flex-column">
          <Col className="d-flex align-items-end border-bottom">
            <h3>Carrito de Compras</h3>
          </Col>
          <Col className="border-bottom mb-3 mt-3">
            <ListaProductos />
          </Col>
          <Col className="mt-3 mb-4 d-flex justify-content-start align-items-center">
            <Button className="w-25 mr-2" variant="secondary" disabled>
              Anterior
            </Button>
            <Button className="w-25 mr-2" variant="secondary" type="submit">
              Siguiente
            </Button>
            <Button className="w-25" variant="outline-danger">
              Cancelar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingCart;
