import React from "react";
import { Container, Button, Card, Row, Col, Table } from "react-bootstrap";
import CuponModal from "./CuponModal";



// stilos de register
import "./styles.css";

const ShoppingCart = () => {
  return (
    <Container fluid className="contenedorPadre">
      <Row>
        <Col lg={8} className="">
          <Container>
            <Card style={{ width: "15rem" }}>
              <Col md={8}>
                <Card.Img variant="top" src="https://via.placeholder.com/25" />
              </Col>
              <Card.Body className="cuerpoCard">
                <Col lg={8}>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>Producto</Card.Text>
                  <Button variant="primary">Delete</Button>
                  <input type="number"/>
                </Col>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col lg={4}>
          <Container>
            <Table >
              <thead>
                <tr>
                  <th>Summary</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>
                    <CuponModal />
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Shipping</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Taxes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
