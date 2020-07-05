import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const PaginaCompra = () => {
  return (
    <div className="container-fluid fondooexit">
      <Container className="cartaexit">
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card className="text-center m-5 cardmadreExit">
              <Card.Header className="card-exit">
                <h5 className="text-white">¡ Pago exitoso !</h5>
              </Card.Header>

              <Card.Body className="imgeexit">
                <img
                  src="https://thumbs.gfycat.com/ConstantThornyGalapagospenguin-small.gif"
                  style={{ height: "200px" }}
                ></img>
                <Card.Text>
                  <h5>
                    {" "}
                    <strong>¡Su pago fue procesado exitosamente!</strong>
                  </h5>
                </Card.Text>
                <Button variant="primary">Volver</Button>
              </Card.Body>
              <Card.Footer className="card-exit ">fecha</Card.Footer>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={12}>
            <Card className="text-center m-5 cardmadreExit">
              <Card.Header className="card-exit">
                <h5 className="text-dark"> Su compra es</h5>
              </Card.Header>
               
               <Card
                body
                style={{ margin: "5px" }}
                className="col-11"
              >
                <Row style={{marginLeft:"0px",marginRight:"0px"}}>
                  <Col xs={4}><img src="a"/></Col>
                  <Col xs={3}>Nombre:<p>asdasdsa</p></Col>
                  <Col xs={2}>Cant: <p>12</p></Col>
                  <Col xs={3}>Precio: $<p>1500</p></Col>
                </Row>
              </Card> 
              
              <Card.Footer className="card-exit text-dark ">El Total de su compra es :</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaginaCompra;
