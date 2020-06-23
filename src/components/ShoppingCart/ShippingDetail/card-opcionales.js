import React from "react";
import { Col, Row, Card, FormCheck } from "react-bootstrap";
import "./styles.css";

const CardOpcion = (props) => {
  return (
    <Card
      name={props.name}
      onChange={props.onChange}
      defaultValue={props.value}
      className={
        props.seleccionado
          ? "card-tipo-envio-seleccionado shadow"
          : "card-tipo-envio shadow"
      }
      onClick={props.onClick}
    >
      <Card.Body>
        <Row>
          <Col sm="auto" className="d-flex align-items-center">
            <FormCheck type="radio" checked={props.seleccionado} />
          </Col>
          <Col>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.descripcion}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardOpcion;
