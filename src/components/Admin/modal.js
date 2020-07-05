import React from 'react';
import {Modal, Form, Button, Col, Row, } from 'react-bootstrap'

const Modalsito = () => {
    return (
        <>
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        <Form style={{ marginLeft: "100px", marginRight: "100px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control type="email" placeholder="nombre" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Control placeholder="Stock" type="number" />
            </Col>
            <Col>
              <Form.Control placeholder="Precio" />
            </Col>
          </Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion del producto</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
         
         
        </Form>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Cerrar</Button>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </> );
}
 
export default Modalsito;