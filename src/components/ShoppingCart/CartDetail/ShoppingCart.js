import React, { useState, Fragment } from "react";
import ListaProductos from "./lista-productos";
import { Col, Row, Container, Button } from "react-bootstrap";

// stilos de register
import "./styles.css";

const ShoppingCart = ({
  carrito,
  setCarrito,
  calcularSubtotal,
  sliderSiguiente,
}) => {
  const [cartValido, setCartValido] = useState(true);

  return (
    <Fragment>
      <Container>
        <Row className="mt-5 d-flex flex-column">
          <Col className="d-flex align-items-end border-bottom">
            <h3>Carrito de Compras</h3>
          </Col>
          <Col className="border-bottom mb-3 mt-3">
            <ListaProductos
              carrito={carrito}
              setCarrito={setCarrito}
              calcularSubtotal={calcularSubtotal}
              setCartValido={setCartValido}
            />
          </Col>
          <Col className="mt-3 mb-4 d-flex justify-content-start align-items-center">
            <Button className="w-25 mr-2" variant="secondary" disabled>
              Anterior
            </Button>
            <Button
              onClick={cartValido ? sliderSiguiente : null}
              className="w-25 mr-2"
              variant="secondary"
              disabled={cartValido ? false : true}
              type="submit"
            >
              Siguiente
            </Button>
            <Button className="w-25" variant="outline-danger">
              Cancelar
            </Button>
          </Col>
        </Row>
        {cartValido ? null : (
          <span className="input-error text-danger text-small d-block">
            <p>Hay un problema con uno o mas productos en su carrito</p>
          </span>
        )}
      </Container>
    </Fragment>
  );
};

export default ShoppingCart;
