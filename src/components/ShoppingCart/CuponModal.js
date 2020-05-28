import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";

function CuponModal() {
  const [smShow, setSmShow] = useState(false);

  return (
    <Fragment>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
     
    </Fragment>
  );
}

export default CuponModal;



