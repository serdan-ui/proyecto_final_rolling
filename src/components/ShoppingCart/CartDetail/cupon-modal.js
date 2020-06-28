import React, { useState, Fragment, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./styles.css";

function CuponModal() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [estaCargando, setCargando] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const [formValido, setFormValido] = useState(false);

  const { register, errors, handleSubmit } = useForm();

  const ValidarInput = (e, longitud) => {
    if (isNaN(e.target.value) === true) {
      setErrorInput("Solo se aceptan números");
      setFormValido(false);
    } else if (e.target.value.length < longitud) {
      setErrorInput("No menos de " + longitud + " caracteres");
      setFormValido(false);
    } else {
      setErrorInput("");
      setFormValido(true);
    }
  };

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
                          className="mb-2 input-cupon"
                          type="text"
                          maxLength="10"
                          name="codigoCupon"
                          placeholder="Código del cupón"
                          ref={register({
                            required: true,
                            minLength: 10,
                          })}
                        />
                        {errors.codigoCupon &&
                          errors.codigoCupon.type === "required" && (
                            <span className="input-error text-danger text-small d-block mb-2">
                              Campo requerido
                            </span>
                          )}
                        {errors.codigoCupon &&
                          errors.codigoCupon.type === "minLength" && (
                            <span className="input-error text-danger text-small d-block mb-2">
                              No menos de 10 caracteres
                            </span>
                          )}
                      </Col>

                      <Col xs="4" sm="4">
                        <Form.Control
                          disabled={estaCargando}
                          type="text"
                          maxLength="4"
                          className="mb-2 input-cupon"
                          placeholder="PIN"
                          name="pinCupon"
                          ref={register({
                            required: true,
                            minLength: 4,
                          })}
                        />
                        {errors.pinCupon &&
                          errors.pinCupon.type === "required" && (
                            <span className="input-error text-danger text-small d-block mb-2">
                              Campo requerido
                            </span>
                          )}
                        {errors.pinCupon &&
                          errors.pinCupon.type === "minLength" && (
                            <span className="input-error text-danger text-small d-block mb-2">
                              No menos de 4 caracteres
                            </span>
                          )}
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
            onClick={handleSubmit(() => setCargando(true))}
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
