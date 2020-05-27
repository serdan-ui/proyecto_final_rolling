import React, { useState } from "react";
import ListTurn from "./ListTurn";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormTurn from "./FormTurn";
import "./styles.css";

const BodyTurn = () => {
const [titleBtn, setTitleBtn] = useState(false)





  return (
    <Container fluid className="containerTurn">
      <Row style={{paddingRight:"0", marginRight:"0"}}>
        <Col className="tilteList" >
          <Button onClick={()=>{setTitleBtn(!titleBtn)}}   >{titleBtn?"Ver Lista de Turnos":"Solicitar Turno"}</Button>
        </Col>
      </Row>
      <h2>{titleBtn? "Turnos": "Lista de Turnos"} </h2>


      {titleBtn? (<FormTurn/>) : ( <ListTurn />)}
     
    </Container>
  );
};

export default BodyTurn;
