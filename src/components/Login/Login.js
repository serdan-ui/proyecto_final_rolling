import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginContainer from "./LoginContainer";
import Sidebar from "./Sidebar";
import Register from "../Register/Register";

const Login = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <Sidebar />
          </Col>
          <Col xs={8}>{login ? <LoginContainer /> : <Register />} </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
