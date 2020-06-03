import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/HeaderStatic";
import PaisesContainer from "./generador-paises";
import CardOpcion from "./card-opcionales";
import "./styles.css";

const ShippingDetail = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    direccion1: "",
    direccion2: "",
    pais: "",
    ciudad: "",
    postal: "",
    telefono: "",
    tipoEnvio: "",
  });

  const handleInputChange = (event) => {
    /* console.log(event.target.value); */
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.apellido + ' ' + datos.pais + ' ' + datos.tipoEnvio)
  }

  return (
    <div>
      <Header />

      <Container className="shipping-detail-container rounded mb-5">
        <Row className="mt-5">
          <Col className="mt-4 d-flex flex-column">
            <Col className="d-flex align-items-end border-bottom">
              <h3>Detalles de Envío</h3>
            </Col>

            <Form onSubmit={enviarDatos}>
              <Col className="border-bottom">
                <Row className="mt-3 mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Nombre"
                      name="nombre"
                      type="text"
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control 
                    placeholder="Apellido" 
                    name="apellido"
                    type="text"
                    onChange={handleInputChange} />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control 
                    placeholder="Direccion"
                    name="direccion1"
                    onChange={handleInputChange} />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control 
                    placeholder="Direccion 2" 
                    name="direccion2"
                    onChange={handleInputChange}/>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                     as="select" 
                     custom
                     name="pais"
                     onChange={handleInputChange}>
                      <option>Pais</option>
                      <PaisesContainer />
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                     placeholder="Ciudad" 
                     name="ciudad"
                     onChange={handleInputChange}/>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control 
                    placeholder="Codigo ZIP/Postal"
                    name="postal"
                    onChange={handleInputChange} />
                  </Col>
                  <Col>
                    <Form.Control 
                    placeholder="N° Telefono"
                    name="telefono" 
                    onChange={handleInputChange}/>
                  </Col>
                </Row>
              </Col>

              <Col className="mt-4 mb-5">
                <Row className="d-flex justify-content-between">
                  <Col>
                    <CardOpcion
                      onChange={handleInputChange}
                      name = "tipoEnvio"
                      titulo="Envío Gratis"
                      descripcion="Demora de 2 a 5 días habiles"
                    />
                  </Col>

                  <Col>
                    <CardOpcion
                      titulo='Envío "Next Day" - $20'
                      descripcion="Entrega en 24 horas"
                    />
                  </Col>
                </Row>
              </Col>

              <Col className="mb-4 d-flex justify-content-start align-items-center">
                <Button className="w-25 mr-2" variant="secondary" type="submit">
                  Siguiente
                </Button>
                <Button className="w-25" variant="outline-danger">
                  Cancelar
                </Button>
              </Col>
            </Form>
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
