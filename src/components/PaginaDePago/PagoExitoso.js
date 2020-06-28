import React from 'react'
import {Button, Card} from 'react-bootstrap'

const PagoExitoso = () => {
  return(<>
 
 
  <Card className="text-center m-5">
    <Card.Header className="bg-success text-white"><h5>¡ Pago exitoso !</h5></Card.Header>
  
  <Card.Body>
    <img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" alt="producto" style={{height: '200px'}}></img>
    <Card.Text>
      <h5>  <strong>¡Su pago fue procesado exitosamente!</strong></h5>
    </Card.Text>
    <Button variant="primary">Volver</Button>
  </Card.Body>
  <Card.Footer className="bg-success text-white">2 days ago</Card.Footer>
</Card>

   </>
   )
}

export default PagoExitoso;