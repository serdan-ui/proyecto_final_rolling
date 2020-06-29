import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/HeaderStatic";
import PaisesContainer from "./generador-paises";
import CardOpcion from "./card-opcionales";
import { useForm } from "react-hook-form";
import "./styles.css";

const ShippingDetail = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

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
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Header />

      <Container className="shipping-detail-container rounded mb-5">
        <Row className="mt-5">
          <Col className="mt-4 d-flex flex-column">
            <Col className="d-flex align-items-end border-bottom">
              <h3>Detalles de Envío</h3>
            </Col>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col className="border-bottom">
                <Row className="mt-3 mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Nombre *"
                      name="nombre"
                      type="text"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Nombre obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.nombre?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Apellido *"
                      name="apellido"
                      type="text"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Apellido obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.apellido?.message}
                    </span>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Direccion *"
                      name="direccion1"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Dirección obligatoria",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.direccion1?.message}
                    </span>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Direccion 2 (opcional)"
                      name="direccion2"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      as="select"
                      custom
                      name="pais"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Seleccione un país",
                        },
                      })}
                    >
                      <option>Pais</option>
                      <PaisesContainer />
                    </Form.Control>
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.pais?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Ciudad *"
                      name="ciudad"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Ciudad obligatoria",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.ciudad?.message}
                    </span>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Codigo ZIP/Postal *"
                      name="postal"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Codigo obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.postal?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="N° Telefono *"
                      name="telefono"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Telefono obligatorio",
                        },
                      })}
                    />
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.telefono?.message}
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col className="mt-4 mb-5">
                <Row className="d-flex justify-content-between">
                  <Col>
                    <CardOpcion
                      onChange={handleInputChange}
                      name="tipoEnvio"
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