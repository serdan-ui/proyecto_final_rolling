import React, { useState, useEffect } from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  CardColumns,
  Dropdown,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import axiosInstance from "../util/axiosInstance";

import { Spinner } from "react-bootstrap";
import swal from "sweetalert";
import Swal from "sweetalert2";
import zIndex from "@material-ui/core/styles/zIndex";

const Mostrador = ({ authen, userId, fetchCarrito }) => {
  // Estados
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loader, setloader] = useState(false);

  //funcion para loader de productos
  const Onloader = () => {
    setloader(true);
  };
  const Offloader = () => {
    setloader(false);
  };

  //Traer productos de base de datos

  const getProductos = async () => {
    const response = await axiosInstance.get("/producto");

    setProductos(response.data.productos);
  };
  useEffect(() => {
    getProductos();
  }, []);

  // Funcion mostrar Imagen derecha
  const mostrarImg = ({ nombre, id, precio, descripcion, imagen }) => {
    console.log(imagen[0]);
    swal({
      title: nombre,
      imageUrl: imagen[0],
      titleText: descripcion,
      text: <img src={imagen[0]}></img>,
      fontsize: 0.5,
      text: ` $ ${precio}`,
      imageHeight: 200,
    });
  };

  // const filtrarCategorias = ({productos,categoria}) => {
  //   console.log(productos)
  //     const newCategorias = productos.filter(element => element.tipo != categoria )
  //     console.log(newCategorias)

  //  }
  //  const handleCategoria = (e) => {
  //   const categoria = e
  //   console.log(productos)
  //   filtrarCategorias(productos,categoria)
  // }

  //funcion para agregar productos al carrito

  const postCart = async (contenido) => {
    const { usuarioID, productoID, cantidad } = contenido;
    Onloader();
    const response = await axiosInstance.post("/cart", {
      usuarioID,
      productoID,
      cantidad,
    });
    fetchCarrito(userId);
    Offloader();
    swal({
      icon: "success",
      title: "Producto agregado correctamente",
      timer: 2000,
    });
  };
  //funcion del onclick del boton agregar
  const addCart = (_id) => {
    const usuarioID = userId;
    const productoID = _id;

    postCart({ usuarioID, productoID });
  };

  return (
    <>
       
      <p className="titulo_product_main">Productos</p>
      <Container fluid className="contenedor-mostrador">
      
        <Row style={{ background: "#171717", margin: "0px" }}>
       
          <Col sm={2} style={{ backgroundColor: "black" }}>
            <h3 style={{ color: "white" }}>Filtrar por: </h3>
            <br />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121" }}
              >
                Categoria
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Auriculares">
                  Auriculares
                </Dropdown.Item>
                <Dropdown.Item eventKey="Monitores">Monitores</Dropdown.Item>
                <Dropdown.Item eventKey="Mouse">Mouse</Dropdown.Item>
                <Dropdown.Item eventKey="Sillas">Sillas</Dropdown.Item>
                <Dropdown.Item eventKey="Teclados">Teclados</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <br />
            <br />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#212121", outlineColor: "black" }}
              >
                Precio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menor a mayor</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mayor a menor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            sm={8}
            className="columnitax"
            style={{ backgroundColor: "black" }}
          >
            

          
            
            <CardColumns className="cardColumns">
              {productos.map((producto) => (
                <Card key={producto._id} sm={12} className="cardProduct">
                  <Card.Img
                    className={producto.stock == 0 ? "sinStock" : null}
                    variant="bottom"
                    src={producto.imagen[0]}
                    rounded
                    style={{ height: "250px", cursor: "pointer" }}
                    onClick={() => mostrarImg(producto)}
                  />
                  <Card.Body
                    onClick={() => mostrarImg(producto)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Title className="font-weight-light text-uppercase">
                      {producto.nombre}
                    </Card.Title>
                    <Card.Text className="font-weight-bold">
                      ${producto.precio}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row className="rowroto">
                      <Col xl={authen ? null : 12} className="p-0">
                        <Button
                          border="danger"
                          className={authen ? null : "col-12"}
                          style={{
                            border: "3px solid #060606",
                            color: "#19ED18",
                            backgroundColor: "#060606",
                            fontSize: "0.9rem",
                          }}
                          onClick={() => mostrarImg(producto)}
                        >
                          Ver mas
                        </Button>
                      </Col>

                      {authen ? (
                        <Col className="p-0">
                          {!loader ? (
                            <Button
                              disabled={producto.stock == 0 ? true : false}
                              variant="success"
                              className="btnroto"
                              style={{
                                border: "2px solid #19ED18",
                                fontSize: "0.9rem",
                                backgroundColor: "#19ED18",
                                color: "black",
                              }}
                              onClick={() => addCart(producto._id)}
                            >
                              <FaCartPlus /> Agregar
                            </Button>
                          ) : (
                            <Spinner animation="border" />
                          )}
                        </Col>
                      ) : null}
                    </Row>
                  </Card.Footer>
                </Card>
              ))}
            </CardColumns>
          </Col>
          <Col sm={2} style={{ backgroundColor: "black" }}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;
