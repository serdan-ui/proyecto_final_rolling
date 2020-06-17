import React, { useState, Fragment } from "react";
import { Col, Row, Form, Container, Card } from "react-bootstrap";
import Cards from "react-credit-cards";
import "./styles.css";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = (props) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [visible, setVisible] = useState();

  return (
    <div onClick={props.onClick}>
    <Card
      className={
        props.seleccionado
          ? "metodo-pago mb-3 shadow metodo-seleccionado"
          : "metodo-pago mb-3 shadow"
      }
      onClick={(e) => {
        setVisible(true);
      }}
    >
      <Container className="mb-3">
        <Row className="d-flex flex-column">
          {visible ? (
            <Col className="mt-3 tarjeta-grafico">
              <div className="mt-3 mb-3">
                <Cards
                  className="shadow"
                  cvc={cvc}
                  expiry={expiry}
                  focused={focus}
                  name={name}
                  number={number}
                />
              </div>
            </Col>
          ) : null}

          <Col>
            <Row className="d-flex flex-column mt-3 mb-3">
              <Col>
                <Row>
                  <Col className="mt-2" sm="1">
                    <Form.Check
                      checked={props.seleccionado}
                      type="radio"
                    />
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
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            onFocus={(e) => setFocus(e.target.name)}
                          />
                        </Col>
                        <Col sm="2">
                          <Form.Control
                            type="tel"
                            name="expiry"
                            placeholder="M/A"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
    </div>
  );
};

export default CreditCard;
