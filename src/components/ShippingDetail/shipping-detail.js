import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/HeaderStatic";
import PaisesContainer from "./generador-paises";
import CardOpcion from "./card-opcionales";
import "./styles.css";

const ShippingDetail = () => {
  return (
    <div>
      <Header />

      <Container className="shipping-detail-container rounded mb-5">
        <Row className="mt-5">
          <Col className="mt-4 d-flex flex-column">
            <Col className="d-flex align-items-end border-bottom">
              <h3>Detalles de Envío</h3>
            </Col>

            <Col className="border-bottom">
              <Form>
                <Row className="mt-3 mb-3">
                  <Col>
                    <Form.Control placeholder="Nombre" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Apellido" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control placeholder="Direccion" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control placeholder="Direccion 2" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control as="select" custom>
                      <option>Argentina</option>
                      <PaisesContainer />
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control placeholder="Ciudad" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control placeholder="Codigo ZIP/Postal" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="N° Telefono" />
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col className="mt-4 mb-5">
              <Row className="d-flex justify-content-between">
                <Col>
                  <CardOpcion
                    color = "rgb(185, 183, 183)"
                    seleccionado="true"
                    titulo="Envío Gratis"
                    descripcion="Demora de 2 a 5 días habiles"
                  />
                </Col>

                <Col>
                  <CardOpcion
                    color = "whitesmoke"
                    seleccionado = "false"
                    titulo='Envío "Next Day" - $20'
                    descripcion="Entrega en 24 horas"
                  />
                </Col>
              </Row>
            </Col>

            <Col className="mb-4 d-flex justify-content-start align-items-center">
              <Button className="w-25 mr-2" variant="secondary">
                Siguiente
              </Button>
              <Button className="w-25" variant="outline-danger">
                Cancelar
              </Button>
            </Col>
          </Col>

          <Col md="4" className="mt-4">
            <Row className="d-flex flex-column">
              <Col className="d-flex align-items-end border-bottom">
                <h3>Resumen</h3>
              </Col>

              <Col>{/* <Resumen /> */}</Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Fotter />
    </div>
  );
};

export default ShippingDetail;
