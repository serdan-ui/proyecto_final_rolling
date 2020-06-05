import React from 'react';
import {Col, Row, Container, Button} from 'react-bootstrap';
import CreditCard from './card-credit';
import PaypalCard from './card-paypal';
import './styles.css';


const PaymentDetail = () => {
    return ( 
        <Container>
        <Row className="mt-5 d-flex flex-column">
          <Col className="d-flex align-items-end border-bottom">
            <h3>Forma de Pago</h3>
          </Col>
          <Col className="border-bottom mb-3 mt-3">
            <CreditCard/>
          </Col>
          <Col className="border-bottom mb-3 mt-3">
            <PaypalCard/>
          </Col>
          <Col className="mt-3 mb-4 d-flex justify-content-start align-items-center">
            <Button className="w-25 mr-2" variant="secondary">
              Anterior
            </Button>
            <Button className="w-25 mr-2" variant="success" type="submit">
              Finalizar
            </Button>
            <Button className="w-25" variant="outline-danger">
              Cancelar
            </Button>
          </Col>
        </Row>
      </Container>
     );
}
 
export default PaymentDetail;