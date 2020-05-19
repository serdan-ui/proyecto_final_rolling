import React, { useState } from "react";
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
import { FaCartPlus, FaWindowClose } from "react-icons/fa";
import mousered from "../Images/mousered.png";
import Teclado from "../Images/teclado.png"
import Tecladouna from "../Images/tecladounamano.png"
import Auris from "../Images/auriii.png"
import Tecladocheto from "../Images/tecladocheto.png"
import Silla from "../Images/silla.png"
import { CardText } from "react-bootstrap/Card";

const Mostrador = () => {
  const [smShow, setSmShow] = useState(false);

  const enviarDato =(name)=>{
    console.log(name)
  };


  return (
    <>
      <p className="titulo_product_main">Productos</p>
      <Container fluid>
        <Row>
          <Col sm={8} className="columnitax">
            <CardColumns>
              <Card>
                <Card.Img variant="top" src={mousered} rounded />
                <Card.Body>
                  <Card.Title>Mouse ReaDragon</Card.Title>
                  <Card.Text>$567</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button variant="info" onClick={() => setSmShow(true)}>
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
                      <Button variant="success" onClick={enviarDato}>
                        <FaCartPlus />
                        Agregar
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Img variant="top" src={Auris} rounded />
                <Card.Body>
                  <Card.Title>Auriculares ReaDragon</Card.Title>
                  <Card.Text>$567</Card.Text>
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
                <Card.Img variant="top" src={Tecladouna} rounded />
                <Card.Body>
                  <Card.Title>Teclado una mano</Card.Title>
                  <Card.Text>$678</Card.Text>
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

          <Col sm={4} className="carrito-xs">
            <Card style={{ width: "18rem" }} className="mercadito-card">
              <Card.Header className="cardArticulos">Articulos seleccionados</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Col>Mouse ReaDragon  <Button variant="danger" size="sm"><FaWindowClose/></Button></Col>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                <Col>Teclado una mano<Button variant="danger" size="sm"><FaWindowClose/></Button></Col>                </ListGroup.Item>
                <ListGroup.Item>
                <Col>Auriculares ReaDragon <Button variant="danger" size="sm"><FaWindowClose/></Button></Col>                </ListGroup.Item>
              </ListGroup>
              <Button className="btnIrcarrito">Ir al carrito</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mostrador;
