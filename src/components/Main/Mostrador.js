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

import { Spinner} from "react-bootstrap";
import swal from "sweetalert";

const Mostrador = ({ setProducts, products ,userId ,fetchCarrito}) => {

  const [loader, setloader] = useState(false)

  //funcion para loader de productos
  const Onloader = () => {
    setloader(true)
  }
  const Offloader = () => {
    setloader(false)
  }

  //Traer productos de base de datos

  const getProductos = async () => {
    const response = await axiosInstance.get("/producto");

    setProductos(response.data.productos);
  };
  useEffect(() => {
    getProductos();
  }, []);

  // Estados
  const [productos, setProductos] = useState([]);

  const [categorias, setCategorias] = useState([]);

  // Funcion mostrar Imagen derecha
  const mostrarImg = ({ nombre, id, precio, descripcion, imagen }) => {
    console.log(imagen[0])
    swal({
      title: nombre,
      imageUrl: imagen[0],
      titleText: descripcion,
      text: ` $ ${precio}`,
      imageHeight: 300,
      imageAlt: "A tall image",
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


const postCart = async(contenido) => {
  const {usuarioID, productoID , cantidad } = contenido;
  Onloader()
  const response = await axiosInstance.post("/cart",{usuarioID,productoID,cantidad})
  Offloader()
  swal({
    icon: "success",
    title: "Producto agregado correctamente",
    timer: 2000,
  });
  }
  const addCart = (_id) => {
    const usuarioID = userId;
    const productoID = _id;
 
    postCart({usuarioID,productoID});
    fetchCarrito(userId)
    }


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
                    variant="top"
                    src={producto.imagen[0]}
                    rounded
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>${producto.precio}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row className="rowroto">
                      <Col className="p-0">
                        <Button
                          border="danger"
                          className="btnroto"
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
                      <Col className="p-0">
                        {!loader ? (<Button
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
                        </Button>) : (<Spinner animation="border" />)}
                        
                      </Col>
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
