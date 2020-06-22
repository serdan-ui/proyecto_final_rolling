import React, { useState, Fragment } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import PaisesContainer from "./generador-paises";
import CardOpcion from "./card-opcionales";
import { useForm } from "react-hook-form";
import "./styles.css";

const ShippingDetail = ({ sliderSiguiente, sliderAnterior }) => {
  const { register, errors, handleSubmit } = useForm();
  const [metodoEnvio, setMetodoEnvio] = useState("EnvioGratis");
  const [envioValido, setEnvioValido] = useState();

  const onSubmit = () => {
    console.log(datos);
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
    tipoEnvio: metodoEnvio,
  });

  const handleInputChange = (event) => {
    event.target.value === ""
      ? setEnvioValido(false)
      : setEnvioValido(true) ||
        setDatos({
          ...datos,
          [event.target.name]: event.target.value,
        });
  };

  const SeleccionarEnvio = (nombreMetodoEnvio) => {
    setMetodoEnvio(nombreMetodoEnvio);
    setDatos({ ...datos, tipoEnvio: nombreMetodoEnvio });
  };

  return (
    <Fragment>
      <Container>
        <Row className="">
          <Col className="mt-5 d-flex flex-column">
            <Col className="d-flex align-items-end border-bottom">
              <h3>Detalles de Envío</h3>
            </Col>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col className="border-bottom">
                <Row className="mt-3 mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
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
                      className="shadow-sm"
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
                      className="shadow-sm"
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
                      className="shadow-sm"
                      placeholder="Direccion 2 (opcional)"
                      name="direccion2"
                      onChange={handleInputChange}
                      ref={register({
                        required: {
                          value: false,
                          message: "Dirección obligatoria",
                        },
                      })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      className="shadow-sm"
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
                      <option>Argentina</option>
                      <PaisesContainer />
                    </Form.Control>
                    <span className="input-error text-danger text-small d-block mb-2">
                      {errors?.pais?.message}
                    </span>
                  </Col>
                  <Col>
                    <Form.Control
                      className="shadow-sm"
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
                      className="shadow-sm"
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
                      className="shadow-sm"
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
                      onClick={() => SeleccionarEnvio("EnvioGratis")}
                      seleccionado={
                        metodoEnvio === "EnvioGratis" ? true : false
                      }
                      titulo="Envío Gratis"
                      descripcion="Demora de 2 a 5 días habiles"
                    />
                  </Col>

                  <Col>
                    <CardOpcion
                      onClick={() => SeleccionarEnvio("EnvioNextDay")}
                      seleccionado={
                        metodoEnvio === "EnvioNextDay" ? true : false
                      }
                      titulo='Envío "Next Day" - $20'
                      descripcion="Entrega en 24 horas"
                    />
                  </Col>
                </Row>
              </Col>

              <Col className="mb-4 d-flex justify-content-start align-items-center">
                <Button
                  onClick={sliderAnterior}
                  className="w-25 mr-2"
                  variant="secondary"
                >
                  Anterior
                </Button>
                <Button
                  onClick={envioValido ? sliderSiguiente : null}
                  className="w-25 mr-2"
                  variant="secondary"
                  type="submit"
                >
                  Siguiente
                </Button>
                <Button className="w-25" variant="outline-danger">
                  Cancelar
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ShippingDetail;
