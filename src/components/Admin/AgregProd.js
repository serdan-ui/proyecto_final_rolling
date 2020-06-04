import React from 'react'
import {Col, Row, Form, Button} from 'react-bootstrap';
import "./styles.css";

const AgregProd = () => {
  return(
    <>
    <h3 className="text-center text-white">Agregar Nuevo Producto</h3>
    <Row>
<div className="col-4"></div>
<div className="col-4">
<Form >
  
    
    <Col>
      <Form.Control placeholder="Nombre producto" className="m-2 align-center tamanoInputPanel" />
    </Col>
    <Col>
      <Form.Control placeholder="Descripción"className="m-2 tamanoInputPanel" />
    </Col>
   
    <Col>
      <Form.Control placeholder="Precio" className="m-2 tamanoInputPanel" />
    </Col>
    <Col>
      <Form.Control placeholder="Stock" className="m-2 tamanoInputPanel" />
    </Col>
    
<Col>
<Button className="form-control bg-primary tamanoInputPanel m-1">Añadir</Button>
</Col>
</Form>
</div>

<div className="col-4"></div>
</Row>
    </>
   )
}
export default AgregProd;
