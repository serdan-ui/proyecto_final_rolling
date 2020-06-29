import React, { useState } from "react";
import productos from "./basedatos";

import {
  Row,
  Col,
  Card,
  Button,
  Container,
  ListGroup,
  Alert,
  CardColumns,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { FaCartPlus, FaWindowClose } from "react-icons/fa";
import mousered from "../Images/mousered.png";

import { CardText } from "react-bootstrap/Card";
import swal from "sweetalert";


const Mostrador = ({ setProducts, products }) => {
  // Estados
  const [smShow, setSmShow] = useState(false); //Modal
  const [mostImg, setMostImg] = useState(false); // Img derecha
  const [modal, setModal] = useState({});

  // Funcion mostrar Imagen derecha
  const mostrarImg = ({ nombre, id, precio, descripcion, img }) => {
    swal({
      title: nombre,
      imageUrl: img,
      titleText: descripcion,
      text: ` $ ${precio}`,
      imageHeight: 300,
      imageAlt: 'A tall image'
    })
   
  };

  //agregar al carrito
  const botonAlerta = (product) => {
    console.log(product);

    setProducts([...products, product]);

  
    
    swal({
      icon: 'success',
      title: 'Producto agregado correctamente',
      timer: 2000,
    })
  };

  return (
    <>
      <p className="titulo_product_main">Productos</p>
      <Container fluid className="contenedor-mostrador">
        <Row style={{ background: "#171717" ,margin:"0px"}}>
          <Col sm={2} style={{backgroundColor:'black'}} > 
          <h3 style={{color:"white"}}>Filtrar por: </h3>
          <br/>
          <Dropdown >
  <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:"#212121"}}>
   Categoria
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item >Auriculares</Dropdown.Item>
    <Dropdown.Item >Monitores</Dropdown.Item>
    <Dropdown.Item >Mouse</Dropdown.Item>
    <Dropdown.Item >Sillas</Dropdown.Item>
    <Dropdown.Item >Teclados</Dropdown.Item>
    <Dropdown.Item >Sillas</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>

  <br/>
  <br/>
  <Dropdown>
  <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:"#212121", outlineColor:"black"}}>
    Precio
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Menor a mayor</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Mayor a menor</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>

  </Col>
          <Col  sm={8}  className="columnitax" style={{backgroundColor:'black'}}>
            <CardColumns className="cardColumns">
              {productos.map((producto) => (
                <Card key={producto.id} sm={12} className="cardProduct">
                  <Card.Img variant="top" src={producto.img} rounded />
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
                            color:"#19ED18",
                            backgroundColor:"#060606",
                            fontSize:"0.9rem",
                          }}
                          onClick={() => mostrarImg(producto)}
                        >
                          Ver mas
                        </Button>
                      </Col>
                      <Col className="p-0">
                        <Button
                          variant="success"
                          className="btnroto"
                          style={{
                            border: "2px solid #19ED18",
                            fontSize:"0.9rem",
                            backgroundColor:"#19ED18",
                            color:"black"
                          }}
                          onClick={() => botonAlerta(producto)}
                          
                        >
                          
                          <FaCartPlus /> Agregar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              ))}
            </CardColumns>
          </Col>
          <Col sm={2} style={{backgroundColor:'black'}} ></Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;
