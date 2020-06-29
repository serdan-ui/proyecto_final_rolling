import React, { useState, useEffect } from "react";


import {
  Row,
  Col,
  Card,
  Button,
  Container,


  CardColumns,
 
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";


import Swal from "sweetalert2";
import axiosInstance from "../util/axiosInstance";

const Mostrador = ({ setProducts, products }) => {
//Traer productos de base de datos

const getProductos = async() =>{
 const response= await  axiosInstance.get("/producto");
 
 setProductos(response.data.productos)
}
useEffect(() => {
  getProductos()
  
}, [])


  // Estados
  const [productos , setProductos]= useState([])
  
 


  // Funcion mostrar Imagen derecha
  const mostrarImg = ({ nombre, id, precio, descripcion, imagen }) => {
    Swal.fire({
      title: nombre,
      imageUrl: imagen[0],
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
                  <Card.Img variant="top" src={producto.imagen[0]} rounded style={{height:"250px"}} />
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
