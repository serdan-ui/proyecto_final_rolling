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
  Modal,
} from "react-bootstrap";
import { FaCartPlus, FaWindowClose } from "react-icons/fa";
import mousered from "../Images/mousered.png";

import { CardText } from "react-bootstrap/Card";
import Swal from "sweetalert2";

const Mostrador = ({ setProducts, products }) => {
  // Estados
  const [smShow, setSmShow] = useState(false); //Modal
  const [mostImg, setMostImg] = useState(false); // Img derecha
  const [modal, setModal] = useState({});

  // Funcion mostrar Imagen derecha
  const mostrarImg = ({ nombre, id, precio, descripcion, img }) => {
    Swal.fire({
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

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  };

  return (
    <>
      <p className="titulo_product_main">Productos</p>
      <Container fluid className="contenedor-mostrador">
        <Row style={{ background: "#171717" ,margin:"0px"}}>
          <Col sm={2} style={{backgroundColor:'black'}} ></Col>
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
                    <Row>
                      <Col>
                        <Button
                          border="danger"
                          
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
                      <Col>
                        <Button
                          variant="success"
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
