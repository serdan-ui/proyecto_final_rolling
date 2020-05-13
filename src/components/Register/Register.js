import React from 'react';
import {Container , Row , Col} from "react-bootstrap";
import FormRegister from "./FormRegister"
// stilos de register
import "../styles/Register.css"

const Register = () => {
    return ( <Container className="container_reg">
        <Row>
            <Col>
            <FormRegister />
            </Col>
        </Row>
    </Container> );
}
 
export default Register;