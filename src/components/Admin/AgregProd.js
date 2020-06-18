

// import React from 'react'
// import {Col, Row, Form, Button} from 'react-bootstrap';
// import "./styles.css";

// const AgregProd = () => {
//   return(
//     <>
//     <h3 className="text-center text-white">Agregar Nuevo Producto</h3>
//     <Row>
// <div className="col-4"></div>
// <div className="col-4">
// <Form >
  
    
//     <Col>
//       <Form.Control placeholder="Nombre producto" className="m-2 align-center tamanoInputPanel" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Descripción"className="m-2 tamanoInputPanel" />
//     </Col>
   
//     <Col>
//       <Form.Control placeholder="Precio" className="m-2 tamanoInputPanel" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Stock" className="m-2 tamanoInputPanel" />
//     </Col>
    
// <Col>
// <Button className="form-control bg-primary tamanoInputPanel m-1">Añadir</Button>
// </Col>
// </Form>
// </div>

// <div className="col-4"></div>
// </Row>
//     </>
//    )
// }
// export default AgregProd;

import React, { useState } from 'react';
import {Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap';
import "./style.css";

import Swal from 'sweetalert2'
import Drag from './Drag';

const AgregProd = () => {

  const [subirImagen, setSubirImagen] = useState({});

  const agregarEvento = (e) =>{
    console.log(e.target.firstChild.data);
    setSubirImagen(e.target.firstChild.data)
  }
  const mostrarDrag = () =>{
    if (subirImagen === "AgregProd"){
      return <Drag/>;
    }
  }
    return (<> 
    <h1 className="text-center text-white">Nuevo Producto </h1>

    <ButtonGroup aria-label="Basic example" >
  <Button variant="info" style={{padding:"0px"}} ><i class="fa fa-plus" ></i></Button>
  <Button variant="info"  style={{paddingLeft:"0px"}} onClick={(e)=> agregarEvento(e)}>Agregar Producto</Button>
</ButtonGroup>
    <div >{mostrarDrag()}</div>
<br/>
<br></br>
      <h2 className=" text-white">Actualizados Recientemente</h2>
    <CardGroup >
  <Card style={{backgroundColor:"#1F2940", color:"white"}} >
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <Card.Title>Notebook Lenovo</Card.Title>
      <Card.Text>
      La notebook Lenovo ThinkBook es el compañero ideal para el trabajo y el ocio. Cuenta con un diseño con acabado metálico, el chasis de aluminio
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">3 de Febrero de 2020</small>
    </Card.Footer>
  </Card>
  
  <Card style={{backgroundColor:"#1F2940", color:"white"}}>
    <Card.Img variant="top" src="https://http2.mlstatic.com/teclado-gamer-redragon-k585-rgb-diti-mexx-D_NQ_NP_605842-MLA31695668029_082019-F.jpg" />
    <Card.Body>
      <Card.Title>Teclado Gamer</Card.Title>
      <Card.Text>
      Accede al sitio web para consultar la disponibilidad y el precio más reciente. Las imágenes pueden estar protegidas por derechos de autor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">20 de Septiembre de 2020</small>
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:"#1F2940", color:"white"}}>
    <Card.Img variant="top" src="https://www.sony.com.ar/image/b789488955522f13ffb4778bd08465c6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF" />
    <Card.Body>
      <Card.Title> Sony Auriculares inalambricos </Card.Title>
      <Card.Text>
      Hechos para una vida activa, los auriculares WH-CH510 cuentan con un diseño liviano y son inalámbricos. Con hasta 35 horas de duración de la batería, 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">12 de Diciembre de 2020</small>
    </Card.Footer>
  </Card>
</CardGroup>

</>  );
}
 
export default AgregProd;