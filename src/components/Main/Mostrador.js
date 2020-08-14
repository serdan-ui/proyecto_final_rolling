import React, { useState, useEffect } from "react";
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
import swal from "sweetalert";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
const Mostrador = ({ authen, userId, fetchCarrito }) => {
  // Estados
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState("todos");
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
    Swal.fire({
      title: nombre,
      imageUrl: imagen[0],
      titleText: descripcion,
      text: ` $ ${precio}`,
      imageHeight: 300,
      imageAlt: "A tall image",
    });
  };

  //funcion para filtrar categorio
  const filtrarCategorias = (producto) => {
    if (categorias === "teclados") {
      if (!producto.tipo) {
        return (
          <Card key={producto._id} sm={12} className="cardProduct">
            <Card.Img
              className={producto.stock === 0 ? "sinStock" : null}
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
              <Card.Title className="font-weight-light text-uppercase text-truncate">
                {producto.nombre}
              </Card.Title>
              <Card.Text className="font-weight-bold">
                ${producto.precio}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row className="d-flex justify-content-around">
                <Col xl={authen ? null : 12} className="p-0 d-flex justify-content-center">
                  <Button
                    border="danger"
                    className={authen ? "btnVerMas" : "col-12 btnVerMas"}
                    
                    onClick={() => mostrarImg(producto)}
                  >
                    Ver mas
                  </Button>
                </Col>

                {authen ? (
                  <Col className="p-0 d-flex justify-content-center">
                    {!loader ? (
                      <Button
                        disabled={producto.stock === 0 ? true : false}
                        variant="success"
                        className="btnAgregar"
                        
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
        );
      }
    }
    if (categorias === "todos") {
      return (
        <Card key={producto._id} sm={12} className="cardProduct">
          <Card.Img
            className={producto.stock === 0 ? "sinStock" : null}
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
            <Card.Title className="font-weight-light text-uppercase text-truncate">
              {producto.nombre}
            </Card.Title>
            <Card.Text className="font-weight-bold">
              ${producto.precio}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className="d-flex justify-content-around">
              <Col xl={authen ? null : 12} className="p-0 d-flex justify-content-center">
                <Button
                  border="danger"
                  className={authen ? "btnVerMas" : "col-12 btnVerMas"}
                  
                  onClick={() => mostrarImg(producto)}
                >
                  Ver mas
                </Button>
              </Col>

              {authen ? (
                <Col className="p-0 d-flex justify-content-center">
                  {!loader ? (
                    <Button
                      disabled={producto.stock === 0 ? true : false}
                      variant="success"
                      className="btnAgregar"
                      
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
      );
    }
    if (producto.tipo === categorias) {
      return (
        <Card key={producto._id} sm={12} className="cardProduct">
          <Card.Img
            className={producto.stock === 0 ? "sinStock" : null}
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
            <Card.Title className="font-weight-light text-uppercase text-truncate">
              {producto.nombre}
            </Card.Title>
            <Card.Text className="font-weight-bold">
              ${producto.precio}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className="d-flex justify-content-center">
              <Col xl={authen ? null : 12} className="p-0 d-flex justify-content-center">
                <Button
                  border="danger"
                  className={authen ? "btnVerMas" : "col-12 btnVerMas"}
                 
                  onClick={() => mostrarImg(producto)}
                >
                  Ver mas
                </Button>
              </Col>

              {authen ? (
                <Col className="p-0 d-flex justify-content-center">
                  {!loader ? (
                    <Button
                      disabled={producto.stock === 0 ? true : false}
                      variant="success"
                      className="btnAgregar"
                      
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
      );
    }
  };

  const onSelecetCategoria = (eventKey) => {
    setCategorias(eventKey);
  };

  //funcion para agregar productos al carrito

  const postCart = async (contenido) => {
    const { usuarioID, productoID, cantidad } = contenido;
    Onloader();
     await axiosInstance.post("/cart", {
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
      <Container className="contenedor-mostrador">
        {/* <p className="titulo_product_main">Productos</p> */}
        <Row className="d-flex justify-content-center">
          <Col
            sm={1}
            className="d-flex justify-content-center"
          >
            <Row className="d-flex flex-column">
              <Col xs="auto" className="d-flex justify-content-center mb-4">
                <h3 className="text-white">Filtrar por: </h3>
              </Col>
              <Col xs="auto" className="d-flex justify-content-center">
                <Dropdown onSelect={onSelecetCategoria}>
                  <Dropdown.Toggle
                    className="mb-4"
                    id="dropdown-basic"
                    style={{ backgroundColor: "#212121", border: "none"  }}
                  >
                    Categoria
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="todos">Todos</Dropdown.Item>
                    <Dropdown.Item eventKey="auriculares">
                      Auriculares
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="monitores">
                      Monitores
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="mouse">Mouse</Dropdown.Item>
                    <Dropdown.Item eventKey="sillas">Sillas</Dropdown.Item>
                    <Dropdown.Item eventKey="teclados">Teclados</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col sm={10}>
            <CardColumns>
              {productos.map((producto) => (
                <>{filtrarCategorias(producto)}</>
              ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;

