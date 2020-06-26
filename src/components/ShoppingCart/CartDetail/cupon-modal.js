import React, { useState, Fragment } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import "./styles.css";

function CuponModal() {
  const [smShow, setSmShow] = useState(false);

  return (
    <Fragment>
      <Button
        variant="outline-danger"
        className="cupon shadow-sm"
        onClick={() => setSmShow(true)}
        size="sm"
      >
        {" "}
        <h6 className="mt-2">INGRESAR CUPON</h6>
      </Button>
      <Modal
        className="modal"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal" className="tituloCupon">
            Ingrese Numero de cupon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm" className="codigo">
                Codigo
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button type="submit" className="botonCupon">
            enviar
          </Button>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default CuponModal;
