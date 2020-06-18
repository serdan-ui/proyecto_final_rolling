import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "./style.css";

const TurnosPanel = () => {
  return (
    <>
      <div className="container">
        <h2 style={{ color: "#96E2FF", textAlign: "center" }}>
          Turnos asignados
        </h2>
        <div className="row">
          {" "}
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#1F2940",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li> Tipo de consulta:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#1F2940",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li>Tipo de Consulta:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#1F2940",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li>Tipo de Consulta:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#1F2940",
              color: "white",
              margin:"20px"
            }}
          >
            <Card.Body>
              <Card.Title>Nombre: </Card.Title>
              <Card.Text>
                <ul>
                  <li>Clase:</li>
                  <li>Hora:</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TurnosPanel;
