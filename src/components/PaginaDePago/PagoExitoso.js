import React from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import moment from "moment";

import "moment/locale/es";





const PagoExitoso = ({fecha,venta}) => {
  let history = useHistory()

  const Fecha = () => {
    return moment(fecha).format("Do [de] MMMM [del] YYYY, h:mm:ss a");
  };

  return (<>

    <div className="container-fluid fondooexit">
      

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
                <Card.Footer className="card-exit ">{Fecha()}</Card.Footer>
              </Card>
            </Col>
            <Col xl={12} lg={12} md={12} >
 <Card className="text-center m-5 cardmadreExit">
   <Card.Header className="card-exit">
     <h5 className="text-dark"> Su compra es</h5>
   </Card.Header>
            {venta.productos.map(producto=>(
 
    
    <Card
    key={producto._id}
     body
     style={{ margin: "5px" }}
     className="col-11"
   >
     <Row style={{marginLeft:"0px",marginRight:"0px"}}>
            <Col xs={3}>Nombre:<p>{producto.nombre}</p></Col>
       <Col xs={2}>Cant: <p>{producto.cantidad}</p></Col>
       <Col xs={3}>Precio: $<p>{producto.precio}</p></Col>
     </Row>
   </Card> 
   
            
            ))}
           <Card.Footer className="card-exit text-dark ">El Total de su compra es :${venta.total}</Card.Footer>
 </Card>
</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PagoExitoso;
