import React, { Fragment, useState, useEffect } from "react";
import cupones from "./1 DB/cupones";
import Loguito from "../Images/Zero-Images/Zero-Black.svg";
import {
  Container,
  Modal,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import {
  FaShopware,
  FaTabletAlt,
  FaLaptop,
  FaDesktop,
  FaMobileAlt,
  FaGamepad,
} from "react-icons/fa";
import "./styles.css";

const CuponDetail = ({
  valorDescuento,
  detalleCupon,
  setDescuento,
  setHayCupon,
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [validandoCupon, setValidandoCupon] = useState(false);

  function simularCargando() {
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }

  useEffect(() => {
    if (validandoCupon) {
      simularCargando().then(() => {
        setValidandoCupon(false);
        setDescuento(0);
        setHayCupon(false);
        cupones.filter((cupon) =>
          cupon.id === detalleCupon.id
            ? console.log("Cupon cancelado (usado = false)")
            : console.log("Error en Cancelar cupon (usado = true)")
        );
      });
    }
  }, [validandoCupon]);

  return (
    <Fragment>
      <Container className="card-descuento rounded ml-1">
        <Row className="d-flex justify-content-between align-items-center ">
          <Col className="mt-2 mb-2">
            <Button
              onClick={() => setMostrarModal(true)}
              xs="auto"
              variant="success"
            >
              Ver Cupón
            </Button>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <h6>(-{detalleCupon.descuento}%)</h6> -${valorDescuento}
          </Col>
        </Row>
      </Container>

      <Modal
        ref={Modal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
      >
        {/* Gráfico */}
        <Modal.Body className="d-flex justify-content-center">
          <Card className="w-100 d-flex justify-content-center" id="cupon">
            <Container>
              <Row className="d-flex flex-column justify-content-center align-items-center">
                <Col>
                  <Row className="d-flex justify-content-between mt-3">
                    <Col xs="auto">
                      <h5>Cupón</h5>
                    </Col>
                    <Col xs="auto">
                      <h3 id="cupon-descuento">-{detalleCupon.descuento}%</h3>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="d-flex flex-column justify-content-center align-items-center mt-2">
                    <Col className="d-flex justify-content-center align-items-center mt-5">
                      <h2>Descuento</h2>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center mt-2 mb-5">
                      <Image src={Loguito} height="110" />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center mt-3 mb-3">
                      <Row>
                        <Col>
                          <FaTabletAlt size="30" />
                        </Col>
                        <Col>
                          <FaLaptop size="30" />
                        </Col>
                        <Col>
                          <FaDesktop size="30" />
                        </Col>
                        <Col>
                          <FaMobileAlt size="30" />
                        </Col>
                        <Col>
                          <FaGamepad size="30" />
                        </Col>
                      </Row>
                    </Col>
                    <Col className="d-flex justify-content-center align-self-center mt-3 mb-3">
                      <Row className="w-100 bg-dark shadow rounded d-flex flex-column justify-content-center mt-2">
                        <Col className="mt-2">
                          <Row className="justify-content-md-between align-items-center">
                            <Col
                              xs="5"
                              className="d-flex justify-content-center"
                            >
                              <h4>Código:</h4>
                            </Col>
                            <Col className="d-flex justify-content-center">
                              <h4>{detalleCupon.codigo}</h4>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Row className="d-flex justify-content-between align-items-center">
                            <Col
                              xs="5"
                              className="d-flex justify-content-center"
                            >
                              <h4>PIN:</h4>
                            </Col>
                            <Col className="d-flex justify-content-center">
                              <h4>{detalleCupon.pin}</h4>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="d-flex flex-column">
                    <Col>
                      <h6>Válido hasta el {detalleCupon.expiracion}</h6>
                    </Col>
                    <Col>
                      <h6 id="cupon-terminos">
                        Ver términos y condiciones en www.zerotech.com
                      </h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card>
        </Modal.Body>
        {/* Gráfico */}
        <Modal.Footer>
          <Row className="w-100 d-flex justify-content-between justify-content-md-around">
            <Col className="d-flex justify-content-center" xs="auto">
              <Button
                disabled={validandoCupon}
                variant="outline-secondary"
                onClick={() => setMostrarModal(false)}
              >
                Cerrar
              </Button>
            </Col>
            <Col className="d-flex justify-content-center" xs="auto">
              <Button
                onClick={() => setValidandoCupon(true)}
                className="btn-cargando"
                variant="danger"
                disabled={validandoCupon}
              >
                {validandoCupon ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Cancelar Cupón"
                )}
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CuponDetail;
