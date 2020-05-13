import React from 'react';
import {Container , Row , Col} from "react-bootstrap";
import FormRegister from "./FormRegister";

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