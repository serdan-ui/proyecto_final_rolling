import React from 'react'
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import moment from "moment"


const Fecha = (hoy) => {
  return moment(hoy).format("Do [de] MMMM [del] YYYY, h:mm:ss a");
};

const PagoRechazado = () => {
  let history = useHistory();
  return (
    <>
      <div className="container-fluid fondoo">
        <div>
          <Container className="cartaRachaz">
            <Row>
              <Col xl={12} lg={12} md={12}>
                <Card className="text-center m-5 cardmadre">
                  <Card.Header className="text-white card-rech">
                    <h5 className="text-white">¡ Pago Rechazado !</h5>
                  </Card.Header>

                  <Card.Body>
                    <img
                      alt="imagen"
                      className="imgrech"
                      src="https://media3.giphy.com/media/jnDMB1WvLilqjtmsG0/giphy.gif"
                    ></img>
                    {/* https://media3.giphy.com/media/dt6qassLoUgtDCwf3h/giphy.gif */}
                    <Card.Text>
                      <h5>
                        {" "}
                        <strong>Hubo un error al procesar tu pago</strong>{" "}
                      </h5>
                    </Card.Text>

                    <Button
                      variant="primary"
                      onClick={() => history.push("/main")}
                    >
                      Volver
                    </Button>
                  </Card.Body>
                  <Card.Footer className="card-rech text-white">
                    {" "}
                    {Fecha()}
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default PagoRechazado;
