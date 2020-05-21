import React from "react";
import { Container, Image, Button, Row, Col } from "react-bootstrap";
import { ErrorCompleto } from "../Images/auriii.png";
import "./styles.css";

const Error404 = () => {
  return (
    <div className="fondo">
      <div >
        
        <Container className="conteniendo">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="volverApag">
              <h2 className="letraFriki">Page not found</h2>
              <h4>Are you sure the website URL is correct?</h4>
            <Button className="ingreso" type="button" size="sm" variant="info" href="../Main">Back to home</Button>
          </Col>
        </Row>
        </Container>

       
      </div>
    </div>
  );
};

export default Error404;
