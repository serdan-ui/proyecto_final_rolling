import React, { useState, Fragment } from "react";
import { Col, Row, Form, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Cards from "react-credit-cards";
import "./styles.css";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = ({
  onClick,
  seleccionado,
  setCamposValidos,
  setDatosTarjeta,
  datosTarjeta,
}) => {
  const { register, errors, handleSubmit } = useForm();

  const [numero, setNumero] = useState("");
  const [nombre, setNombre] = useState("");
  const [expiracion, setExpiracion] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const GuardarDatosTarjeta = (e) => {
    
  }

  return (
    <Fragment>
      <Card
        onClick={onClick}
        className={
          seleccionado
            ? "metodo-pago mb-3 shadow metodo-seleccionado"
            : "metodo-pago mb-3 shadow"
        }
      >
        <Container className="mb-3">
          <Row className="d-flex flex-column">
            {seleccionado ? (
              <Col className="mt-3 tarjeta-grafico">
                <div className="mt-3 mb-3">
                  <Cards
                    className="shadow"
                    cvc={cvc}
                    expiry={expiracion}
                    focused={focus}
                    name={nombre}
                    number={numero}
                  />
                </div>
              </Col>
            ) : null}

            <Col>
              <Row className="d-flex flex-column mt-3 mb-3">
                <Col>
                  <Row>
                    <Col className="mt-2" sm="1">
                      <Form.Check checked={seleccionado} type="radio" />
                    </Col>
                    <Col>
                      <Card.Title>
                        <Row className="d-flex flex-column">
                          <Col>
                            <h5>Tarjeta de Crédito</h5>
                          </Col>
                          <Col>
                            <h6>
                              Usar tarjeta de crédito como medio de pago (VISA,
                              MasterCard)
                            </h6>
                          </Col>
                        </Row>
                      </Card.Title>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Form>
                    <Row className="d-flex flex-column">
                      <Col className="mb-3 mt-2">
                        <Row className="d-fles justify-content-between">
                          <Col sm="8">
                            <Form.Control
                              className="d-flex justify-content-between"
                              type="tel"
                              name="number"
                              placeholder="0000 0000 0000 0000"
                              value={numero}
                              onChange={(e) => setNumero(e.target.value)}
                              onFocus={(e) => setFocus(e.target.name)}
                            />
                          </Col>
                          <Col sm="2">
                            <Form.Control
                              type="tel"
                              name="expiry"
                              placeholder="M/A"
                              value={expiracion}
                              onChange={(e) => setExpiracion(e.target.value)}
                              onFocus={(e) => setFocus(e.target.name)}
                            />
                          </Col>
                          <Col sm="2">
                            <Form.Control
                              type="tel"
                              name="cvc"
                              placeholder="CVC"
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value)}
                              onFocus={(e) => setFocus(e.target.name)}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Nombre en la Tarjeta"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          onFocus={(e) => setFocus(e.target.name)}
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </Fragment>
  );
};

export default CreditCard;