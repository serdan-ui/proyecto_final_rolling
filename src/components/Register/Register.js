import React from 'react';
import {Container , Row , Col} from "react-bootstrap";
import FormRegister from '../Register/FormRegister'

const Register = () => {
    return ( <Container>
        <Row>
            <Col>
            <FormRegister />
            </Col>
        </Row>
    </Container> );
}
 
export default Register;