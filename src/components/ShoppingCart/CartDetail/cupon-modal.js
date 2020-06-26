import React, { useState, Fragment, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./styles.css";

function CuponModal() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [estaCargando, setCargando] = useState(false);
  const [formValido, setFormValido] = useState(false);

  const { register, errors, handleSubmit } = useForm();

  function simularCargando() {
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }

  useEffect(() => {
    if (estaCargando) {
      simularCargando().then(() => {
        setCargando(false);
      });
    }
  }, [estaCargando]);

  const onSubmit = () => {};

  return (
    <Fragment>
      <Button
        variant="outline-danger"
        className="cupon shadow-sm"
        onClick={() => setMostrarModal(true)}
        size="md"
      >
        {" "}
        <h6 className="mt-2">CANJEAR CUPÓN</h6>
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
      >
        <Modal.Header closeButton={estaCargando ? false : true}>
          <Modal.Title id="contained-modal-title-vcenter" className="mt-3">
            <h3 className="titulo-cupon">Cupón de descuento</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-block">
            <Col>
              <Row className="d-flex flex-column">
                <Col className="mb-2 mt-4">
                  <h5>Ingresar Datos:</h5>
                </Col>
                <Col>
                  <form>
                    <Row className="d-md-flex flex-md-row mr-sm-4 ml-sm-4">
                      <Col sm="8">
                        <Form.Control
                          disabled={estaCargando}
                          className="mb-2"
                          name="codigoCupon"
                          placeholder="Ingrese el código de su copón"
                          ref={register({
                            required: {
                              value: true,
                              message: "Código inválido",
                            },
                          })}
                        />

                        <span className="input-error text-danger text-small d-block mb-2">
                          {errors?.codigoCupon?.message}
                        </span>
                      </Col>
                      <Col xs="4" sm="4">
                        <Form.Control
                          disabled={estaCargando}
                          type="number"
                          className="mb-2"
                          placeholder="PIN"
                          name="pinCupon"
                          ref={register({
                            required: {
                              value: true,
                              message: "PIN inválido",
                            },
                          })}
                        />

                        <span className="input-error text-danger text-small d-block mb-2">
                          {errors?.pinCupon?.message}
                        </span>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Col>
            <Col className="mt-4">
              <p>
                - Recuerde revisar la fecha de caducidad de su cupón. <br />- Si
                posee algún problema no dude en{" "}
                <a href="http://localhost:3000/turn">Solicitar un Turno</a> en
                algunas de nuestras sucursales.
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={estaCargando}
            variant="outline-secondary"
            onClick={() => setMostrarModal(false)}
          >
            Cerrar
          </Button>
          <Button
            
            className="btn-cargando"
            variant="success"
            disabled={estaCargando}
            onClick={handleSubmit(() => setCargando(true)) 
            }
          >
            {estaCargando ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Canjear Cupón"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CuponModal;
