import React, { useState } from "react";
import { Col, Row, Container, Image, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./styles.css";

const ProductCard = ({ producto, carrito, setCarrito, calcularSubtotal, setCartValido }) => {
  const { id, img, nombre, descripcion, precio, cantidad } = producto;

  const [inputValido, setInputValido] = useState(true);

  const CambiarCantidad = (e) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: e.target.value }
          : producto
      )
    );
    calcularSubtotal();
    console.log("nombre: " + nombre + " id: " + id + " cantidad: " + cantidad);
  };

  const EliminarProducto = () => {
    Swal.fire({
      title: "Eliminar Producto?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#E74C3C",
      cancelButtonColor: "#ABB2B8",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.value) {
        const productos = carrito.filter((producto) => producto.id !== id);
        setCarrito(productos);
        calcularSubtotal();
      }
    });
  };

  return (
    <Container className="mt-2 mb-3 product-card border">
      <Row className="mt-2">
        <Col
          sm="4"
          className="d-flex justify-content-center align-items-center"
        >
          <Image className="imagen-card" src={img} rounded fluid />
        </Col>
        <Col sm="8" className="mt-2">
          <Row className="d-flex flex-column">
            <Col className="mb-2">
              <Row>
                <Col>
                  <h4>{nombre}</h4>
                </Col>
                <Col>
                  <Button
                    onClick={EliminarProducto}
                    className="close d-flex align-items-center justify-content-center"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col className="mb-2">
              <h6>{descripcion}</h6>
            </Col>
            <Col>
              <Row className="d-flex justify-content-between">
                <Col>
                  <h5>{"$" + precio}</h5>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Row className="d-block">
                    <Col>
                      <input
                        className="mb-1 text-center"
                        defaultValue={cantidad}
                        onChange={(e) => {
                          e.target.value < 1
                            ? setInputValido(false) || setCartValido(false)
                            : setInputValido(true) || CambiarCantidad(e) || setCartValido(true);
                        }}
                        type="number"
                        min="1"
                        max="100"
                      />
                    </Col>
                    <Col>
                      {inputValido ? null : (
                        <span className="input-error text-danger text-small d-block">
                          <p>Número Inválido</p>
                        </span>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
