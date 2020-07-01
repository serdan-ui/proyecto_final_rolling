import React, { useState, useEffect } from "react";
import { Button, ListGroup, Badge, Row, Col } from "react-bootstrap";
import { FaCartPlus, FaRegWindowClose } from "react-icons/fa";

const BtnCart = ({ products, setCarrito }) => {
  console.log(products);

  const [cartOpen, setCartOpen] = useState(false);

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
  var option = [];
const optionSelect = (stock) => {
  
for (var i = 0; i < parseInt(stock); i++) {
  option.push(i+1);
}
return 
}

  return (
    <>
      <div className="padreContainer">
        <div className={clase}>
          <Button className="btnCart_header mr-2" onClick={abreCarro}>
            {" "}
            <FaCartPlus className="icons_header_cart" />
            <Badge variant="dark">{products.length}</Badge>
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
                <Col >
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
                          <img
                            src={product.productoId.imagen[0]}
                            className="imgCartBtn"
                          />
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
                        <Button variant="dark" text="white">
                          Eliminar
                        </Button>
                        <select
                          className="custom-select custom-select-sm w-50 mt-1"
                          id="cantidadProducto"
                        >{optionSelect(product.productoId.stock)}
                         {option.map(opcion=>(
                            <option>{opcion}</option>
                         ))}
                        </select>
                      </Col>
                    </ListGroup>
                  </Row>
                ))}
            <Row>
              <Col>
                <Button
                  onClick={() => setCarrito(products)}
                  href="http://localhost:3000/shopping-checkout"
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
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default BtnCart;
