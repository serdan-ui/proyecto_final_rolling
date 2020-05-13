import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LoginContainer from "./LoginContainer";
import Sidebar from "./Sidebar";
import Register from "../Register/Register";

const Login = () => {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <Sidebar />
          </Col>
          <Col xs={8} > {login ? <LoginContainer/> : <Register/>}
           
          
         </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
