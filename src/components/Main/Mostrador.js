import React, { useState } from "react";
import productos from "./basedatos";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  ListGroup,
  CardGroup,
  CardColumns,
  Modal,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import mousered from "../Images/mousered.png";
import { CardText } from "react-bootstrap/Card";
import Swal from "sweetalert2";
const Mostrador = () => {
  // Estados
  const [smShow, setSmShow] = useState(false); //Modal
  const [mostImg, setMostImg] = useState(false) // Img derecha
  const [modal , setModal ] = useState({

  })


 
// Funcion mostrar Imagen derecha
const mostrarImg = ({nombre,id,precio}) => {
  
  if(mostImg===false){
    setMostImg(true); 
  } 
  setModal({nombre,id,precio})
}



  return (
    <>
      <h3>Productos</h3>
      <Container fluid>
        <Row style={{background:"#283747"}}>
          <Col sm={8} className="columnitax">
            <CardColumns>
             {productos.map((producto) =>(
                <Card key={producto.id} >
                <Card.Img variant="top" src={mousered} rounded />
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
                      <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-sm" name="titulo">
                            Mouse Readragon
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            Ipsum molestiae natus adipisci modi eligendi?
                            Debitis amet quae unde commodi aoribus debitis! Ab
                            quos consequuntur eaque quo rem! Mollitia reiciendis
                            porro quo magni incidunt dolore amet atque facilis
                            ipsum deleniti rem!
                          </p>
                          <span name="precio"><strong>$599</strong></span>
                        </Modal.Body>
                      </Modal>
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
             ))}

              <Card>
                <Card.Img variant="top" src={mousered} rounded />
                <Card.Body>
                  <Card.Title>Mouse ReaDragon</Card.Title>
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
                <Card.Img variant="top" src={mousered} rounded />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>$678</Card.Text>
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
                <Card.Img variant="top" src={mousered} rounded />{" "}
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
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
                <Card.Img variant="top" src={mousered} rounded />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
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
              <Card.Header>Articulos seleccionados</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                 <p>{modal.nombre}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                <p>{modal.precio}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  aca va el nombre y precio del producto
                </ListGroup.Item>
              </ListGroup>
              <Button variant="info">Ir al carrito</Button>
              <Button variant="danger" onClick={() => setMostImg(false)} >X</Button>
            </Card>
          </Col>) : null}
          
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;
