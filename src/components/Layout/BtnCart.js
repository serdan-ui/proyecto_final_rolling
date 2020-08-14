import React, { useState } from "react";
import {
  Button,
  ListGroup,
  Badge,
  Row,
  Col,
  Spinner,
  Image,
} from "react-bootstrap";
import { FaCartPlus, FaRegWindowClose, FaRegTrashAlt } from "react-icons/fa";
import axiosInstance from "../util/axiosInstance";
import { useHistory } from "react-router-dom";

const BtnCart = ({ products, setCarrito, userId, fetchCarrito, authen }) => {
  const [loaderCart, setloaderCart] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  let history = useHistory();
  let productoId;
  //funcion para loader de productos
  const Onloader = () => {
    setloaderCart(true);
  };
  const Offloader = () => {
    setloaderCart(false);
  };

  const cierroCarro = () => {
    setCartOpen(false);
  };

  const abreCarro = () => {
    setCartOpen(true);
  };

  let clase;

  cartOpen ? (clase = "btnCartOpen") : (clase = "cuerpoCart");

  //funcion para poner en el selet el stock de cada producto
  const optionSelect = (stock) => {
    var option = [];
    for (var i = 0; i < parseInt(stock); i++) {
      option.push(i + 1);
    }
    return option;
  };

  const claseBotones = () => {
    let classBot;
    if (cartOpen) {
      return;
    } else {
      return (classBot = "none");
    }
  };
  //funcion para eliminar los productos del carrito
  const deleteCart = async (_id) => {
    Onloader();
    const response = await axiosInstance.delete(`/cart/${_id}`, {
      data: {
        usuarioId: userId,
      },
    });
    fetchCarrito(userId);
    Offloader();
  };

  //funcion para cambiar la cantidad con select

  const tomarProducto = (producto) => {
    productoId = producto.productoId._id;
  };
  const handleCantidad = async (e) => {
    const cantidad = e.target.value;
    const response = await axiosInstance.post("/cart", {
      cantidad,
      usuarioID: userId,
      productoID: productoId,
    });
    fetchCarrito(userId);
  };
  //funcion para ir al carrito
  const irCarrito = () => {
    setCarrito(products);
    history.push("/shopping-checkout");
  };

  return (
    <>
      <div className="padreContainer">
        <div className={clase}>
          {authen ? (
            <Button className="btnCart_header mr-2" onClick={abreCarro}>
              <FaCartPlus className="icons_header_cart" />
              <Badge>{products.length}</Badge>
            </Button>
          ) : null}

          <Row className="d-flex flex-column">
            <Col className="" sm={4}>
              <Button
                className="cartClose "
                variant="dark"
                onClick={cierroCarro}
              >
                <FaRegWindowClose />
              </Button>
            </Col>
            <Col className="d-flex justify-content-center" sm={12}>
              <h4 className="cartClose">Productos Seleccionados</h4>
            </Col>
          </Row>
          <div>
            <ListGroup className="containerCart">
              <Row className=" border">
                <Col
                  className="d-flex justify-content-center mt-2 mb-2 border-right font-weight-bolder"
                  xs={4}
                >
                  Imagen
                </Col>
                <Col
                  className="d-flex justify-content-center mt-2 mb-2 border-right font-weight-bolder"
                  xs={4}
                >
                  Nombre
                </Col>
                <Col
                  className="d-flex justify-content-center mt-2 mb-2 font-weight-bolder"
                  xs={4}
                >
                  Precio
                </Col>
              </Row>

              {products.lenght === 0
                ? null
                : products.map((product) => (
                    <Row className="mt-2 mb-2 rounded shadow cardProducto-Cart border-top">
                      <Col
                        className="d-flex justify-content-center align-items-center border-right"
                        xs={4}
                      >
                        {!loaderCart ? (
                          <Image
                            fluid
                            src={product.productoId.imagen[0]}
                            className="imgCartBtn"
                          />
                        ) : (
                          <Spinner animation="border" variant="dark" />
                        )}
                      </Col>
                      <Col
                        className="d-flex justify-content-center align-items-center text-center text-justify border-right"
                        xs={4}
                      >
                        {product.productoId.nombre}
                      </Col>
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Row className="h-100">
                          <Col xs="9" className=" h-100">
                            <Row className=" d-flex flex-column justify-content-center h-100">
                              <Col className=" d-flex justify-content-center align-items-end ">
                                ${product.productoId.precio}
                              </Col>
                              {/* Que pasa carnal */}
                              <Col className="d-flex justify-content-center align-items-center">
                                <select
                                  onClick={() => tomarProducto(product)}
                                  onChange={handleCantidad}
                                  className="custom-select custom-select-sm w-100"
                                  id="cantidadProducto"
                                >
                                  {optionSelect(product.productoId.stock) ? (
                                    optionSelect(product.productoId.stock).map(
                                      (opcion) => (
                                        <>
                                          {opcion ==
                                          product.cantidadProducto ? (
                                            <option value={opcion} selected>
                                              {opcion}
                                            </option>
                                          ) : (
                                            <option value={opcion}>
                                              {opcion}
                                            </option>
                                          )}
                                        </>
                                      )
                                    )
                                  ) : (
                                    <Spinner
                                      animation="border"
                                      variant="dark"
                                    />
                                  )}
                                </select>
                              </Col>
                              <Col className="border-top d-flex justify-content-center align-items-center font-weight-bold">
                                <p>
                                  $
                                  {parseInt(product.cantidadProducto) *
                                    parseInt(product.productoId.precio)}
                                </p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xs="1"
                            className="d-flex align-items-start justify-content-center"
                          >
                            <Button
                              onClick={() => deleteCart(product._id)}
                              className="close"
                              aria-label="Close"
                            >
                              <FaRegTrashAlt className="trash-icono" />
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  ))}
            </ListGroup>

            <Row style={{ display: claseBotones() }}>
              <Col>
                <Button onClick={irCarrito} variant="success" block>
                  Ir a carrito
                </Button>
              </Col>
              <Col>
                <Button variant="dark" onClick={cierroCarro} block>
                  Seguir comprando{" "}
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnCart;
