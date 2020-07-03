import React from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {moment} from "moment";
const PagoExitoso = () => {
  let history = useHistory()

  const Fecha =(hoy)=>{
    moment(hoy).format('MMMM Do YYYY, h:mm:ss a');
  }


  return (<>

    <div className="container-fluid fondooexit">
      <div>

        <Container className="cartaexit">
          <Row>

            <Col xl={12} lg={12} md={12} >

              <Card className="text-center m-5 cardmadreExit">
                <Card.Header className="card-exit"><h5 className="text-white">¡ Pago exitoso !</h5></Card.Header>

                <Card.Body className="imgeexit">
                  <img src="https://thumbs.gfycat.com/ConstantThornyGalapagospenguin-small.gif"
                    style={{ height: '200px' }}></img>
                  <Card.Text>
                    <h5>  <strong>¡Su pago fue procesado exitosamente!</strong></h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=> history.push("/main")}>Volver</Button>
                </Card.Body>
                <Card.Footer className="card-exit ">2 days ago</Card.Footer>
              </Card>


            </Col>
          </Row>
        </Container>
      </div>
    </div>

  </>
  )
}

export default PagoExitoso;