import React, { useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./styles.css";

const ProductCard = ({
  producto,
  carrito,
  setCarrito,
  calcularSubtotal,
  setCartValido,
}) => {
  const { id, img, nombre, descripcion, precio, cantidad } = producto;

  const CambiarCantidad = (valor) => {
    cantidad + valor != 0 && cantidad + valor != 10
      ? setCarrito(
          carrito.map((producto) =>
            producto.id === id
              ? { ...producto, cantidad: cantidad + valor }
              : producto
          )
        )
      : Swal.fire({
        title: 'Compra Mayorista',
        text: "Para comprar grandes cantidades tendrás que solicitar un turno. Descuida, tu carrito no se perderá.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Solicitar Turno'
      }).then((result) => {
        if (result.value) {
          window.location.href = "turn";
        }
      })
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
      }
    });
  };

  return (
    <Container className="mt-2 mb-3 product-card border">
      <Row className="mt-2 mb-sm-2">
        <Col
          md="4"
          sm="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Image className="imagen-card" src={img} rounded fluid />
        </Col>
        <Col sm="6" md="8" className="mb-sm-1 producto-descripcion">
          <Row className="mt-2 d-flex flex-column align-items-baseline">
            <Col className="mb-2">
              <Row className="d-flex justify-content-between">
                <Col xs="6" md="8">
                  <h4>{nombre}</h4>
                </Col>
                <Col>
                  <Button onClick={EliminarProducto} className="close">
                    <FaRegTrashAlt className="trash-icono" />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col className="mb-2 mb-md-5">
              <h6>{descripcion}</h6>
            </Col>
            <Col>
              <Row className="d-flex justify-content-between">
                <Col xs="auto" className="d-flex align-items-center">
                  <h5>{"$" + precio}</h5>
                </Col>
                <Col xs="auto" className="d-flex justify-content-center">
                  <Row className="w-100">
                    <Col className="d-flex align-items-center justify-content-center">
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={() => CambiarCantidad(1)}
                      >
                        <FaPlus />
                      </Button>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <h3>{cantidad}</h3>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <Button
                        disabled={cantidad === 1}
                        size="sm"
                        variant="outline-danger"
                        onClick={() => CambiarCantidad(-1)}
                      >
                        <FaMinus />
                      </Button>
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
