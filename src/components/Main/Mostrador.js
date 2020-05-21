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
import Teclado from "../Images/teclado.png"
import Tecladouna from "../Images/tecladounamano.png"
import Auris from "../Images/auriii.png"
import Tecladocheto from "../Images/tecladocheto.png"
import Silla from "../Images/silla.png"
import { CardText } from "react-bootstrap/Card";
import Swal from 'sweetalert2'

const Mostrador = () => {
  // Estados
  const [smShow, setSmShow] = useState(false); //Modal
  const [mostImg, setMostImg] = useState(false) // Img derecha
  const [modal , setModal ] = useState({

  })


 
// Funcion mostrar Imagen derecha
const mostrarImg = ({nombre,id,precio,descripcion,img}) => {
  
  if(mostImg===false){
    setMostImg(true); 
  } 
  setModal({nombre,id,precio,descripcion,img})
}

//agregar al carrito
const botonAlerta = () =>{
  console.log("hola")
  Swal.fire({
    icon: 'success',
    title: 'El producto ha sido agregado al carrito',
    showConfirmButton: false,
    timer: 1500
  })
   
  
  
}


  return (
    <>
      <p className="titulo_product_main">Productos</p>
      <Container fluid>
        <Row style={{background:"#283747"}}>
          <Col sm={8} className="columnitax">
            <CardColumns>
             {productos.map((producto) =>(
                <Card key={producto.id} >
                <Card.Img variant="top" src={producto.img} rounded />
                <Card.Body>
             <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>${producto.precio}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button variant="info" onClick={() => mostrarImg(producto)}>
                        Ver mas
                      </Button>
                      
                    </Col>
                    <Col>
                      <Button variant="success" onClick={botonAlerta}>
                        <FaCartPlus />
                        Agregar
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
             ))}

              <Card>
                <Card.Img variant="top" src={Auris} rounded />
                <Card.Body>
                  <Card.Title>Auriculares ReaDragon</Card.Title>
                  <Card.Text>$567</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button variant="info" onClick={mostrarImg}>Ver mas</Button>
                    </Col>
                    <Col>
                      <Button variant="success">
                        <FaCartPlus />
                        Agregar
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>

              
              <Card>
                <Card.Img variant="top" src={Tecladocheto} rounded />{" "}
                <Card.Body>
                  <Card.Title>Teclado Gammer cheto</Card.Title>
                  <Card.Text>$890</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button variant="info">Ver mas</Button>
                    </Col>
                    <Col>
                      <Button variant="success">
                        <FaCartPlus />
                        Agregar
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Teclado} rounded />
                <Card.Body>
                  <Card.Title>Teclado Gammer</Card.Title>
                  <Card.Text>$400</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button variant="info">Ver mas</Button>
                    </Col>
                    <Col>
                      <Button variant="success">
                        <FaCartPlus />
                        Agregar
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Silla} rounded />
                <Card.Body>
                  <Card.Title>Teclado Gammer</Card.Title>
                  <Card.Text>$400</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button variant="info">Ver mas</Button>
                    </Col>
                    <Col>
                      <Button variant="success">
                        <FaCartPlus />
                        Agregar
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </CardColumns>
          </Col>
            {mostImg ? (<Col sm={4} className="carrito-xs">
            <Card style={{ width: "18rem" }} className="mercadito-card">
              <Card.Header className="cardArticulos"><strong>{modal.nombre}</strong></Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                 <Card.Img src={modal.img}/>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p><strong>Precio: </strong> ${modal.precio} </p>
                </ListGroup.Item>
                <ListGroup.Item>
             <p><strong>Descripcion: </strong>{modal.descripcion}</p>  
                 </ListGroup.Item>
              </ListGroup>
              <Row>
                <Col><Button variant="success" block ><FaCartPlus />Agregar</Button></Col>
                <Col><Button variant="danger" onClick={() => setMostImg(false)} block>Cancelar  </Button></Col>
              </Row>
            </Card>
          </Col>) : null}
          
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;
