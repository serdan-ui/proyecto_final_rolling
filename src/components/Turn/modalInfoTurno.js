import React from "react";
import { Container, Col, Modal, Row, Button } from "react-bootstrap";

const MydModalWithGrid = (props) => {
  console.log(props);
  return (
    <Modal {...props} aria-labelledby=" contained-modal-title-vcenter ">
      <Modal.Header
        closeButton
        className="modalInfoTurno"
        style={{
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderBottom: "1px solid yellowgreen",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          {props.turno.servicio}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid modalInfoTurno">
        <Container>
          <Row>
            {props.turno.descripcion ? (
              <Col xs={12} md={8}>
                <p>Descripcion : {props.turno.descripcion}</p>
              </Col>
            ) : null}

            {props.turno.dispositivo ? (
              <Col xs={6} md={4}>
                <p>Dispositivo : {props.turno.dispositivo} </p>
              </Col>
            ) : null}
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <p>Fecha: {props.ModificarFecha(props.turno.fecha)}</p>
            </Col>
            <Col xs={6} md={4}>
              <p>Hora: {props.turno.hora}</p>
            </Col>
            {props.turno.marca ? (
              <Col xs={6} md={4}>
                <p>Marca: {props.turno.marca}</p>
              </Col>
            ) : null}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer
        className="modalInfoTurno"
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderTop: "1px solid yellowgreen",
        }}
      >
        <Button variant="dark" onClick={props.onHide}>
          cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MydModalWithGrid;
