import React, { useState, useEffect } from "react";
import { Button, ListGroup, Badge, Row, Col, Spinner } from "react-bootstrap";
import { FaCartPlus, FaRegWindowClose } from "react-icons/fa";
import axiosInstance from "../util/axiosInstance";
import { useHistory } from "react-router-dom";

const BtnCart = ({ products, setCarrito, userId, fetchCarrito }) => {
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
  {
    cartOpen ? (clase = "btnCartOpen") : (clase = "cuerpoCart");
  }

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
    console.log(_id);
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
          <Button className="btnCart_header mr-2" onClick={abreCarro}>
            {" "}
            <FaCartPlus className="icons_header_cart" />
            <Badge>{products.length}</Badge>
          </Button>

          <Row>
            <Col sm={4}>
              <Button
                className="cartClose"
                variant="dark"
                onClick={cierroCarro}
              >
                <FaRegWindowClose />
              </Button>
            </Col>
            <Col sm={8}>
              <h4 style={{ color: "white" }} className="cartClose">
                Productos seleccionados
              </h4>
            </Col>
          </Row>
          <div>
            <ListGroup className="containerCart">
              <Row>
                <ListGroup horizontal className="estilosTitulosbtn">
                  <Col xs={5}>
                    <ListGroup.Item className="estilosTitulosbtn">
                      Imagen
                    </ListGroup.Item>
                  </Col>
                  <Col xs={6}>
                    <ListGroup.Item className="estilosTitulosbtn">
                      Nombre
                    </ListGroup.Item>
                  </Col>
                  <Col>
                    <ListGroup.Item className="estilosTitulosbtn">
                      Precio
                    </ListGroup.Item>
                  </Col>
                </ListGroup>
              </Row>

              {products.lenght === 0
                ? null
                : products.map((product) => (
                    <Row style={{ borderTop: "0.5px solid greenyellow" }}>
                      <ListGroup horizontal>
                        <Col xs={4}>
                          <ListGroup.Item className="productitoslistados">
                            {!loaderCart ? (
                              <img
                                src={product.productoId.imagen[0]}
                                className="imgCartBtn"
                              />
                            ) : (
                              <Spinner animation="border" variant="light" />
                            )}
                          </ListGroup.Item>
                        </Col>
                        <Col xs={4}>
                          <ListGroup.Item className="productitoslistados">
                            {product.productoId.nombre}
                          </ListGroup.Item>
                        </Col>

                        <Col>
                          <ListGroup.Item className="productitoslistados m-1">
                            {" "}
                            ${product.productoId.precio}
                          </ListGroup.Item>
                          <Button
                            variant="dark"
                            text="white"
                            onClick={() => deleteCart(product._id)}
                          >
                            Eliminar
                          </Button>
                          <select
                            onClick={() => tomarProducto(product)}
                            onChange={handleCantidad}
                            className="custom-select custom-select-sm w-50 mt-1"
                            id="cantidadProducto"
                          >
                            {optionSelect(product.productoId.stock) ? (
                              optionSelect(product.productoId.stock).map(
                                (opcion) => (
                                  <>
                                    {opcion == product.cantidadProducto ? (
                                      <option value={opcion} selected>
                                        {opcion}
                                      </option>
                                    ) : (
                                      <option value={opcion}>{opcion}</option>
                                    )}
                                  </>
                                )
                              )
                            ) : (
                              <Spinner animation="border" variant="dark" />
                            )}
                          </select>
                        </Col>
                      </ListGroup>
                    </Row>
                  ))}
            </ListGroup>

            <Row style={{ display: claseBotones() }}>
              <Col>
                <Button
                  onClick={irCarrito}
                  variant="success"
                  block
                  style={{
                    border: "3px solid #060606",
                    color: "#19ED18",
                    backgroundColor: "#060606",
                  }}
                >
                  Ir a carrito
                </Button>
              </Col>
              <Col>
                <Button
                  variant="dark"
                  onClick={cierroCarro}
                  block
                  style={{
                    border: "none",
                    color: "#19ED18",
                    backgroundColor: "#212121",
                  }}
                >
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
