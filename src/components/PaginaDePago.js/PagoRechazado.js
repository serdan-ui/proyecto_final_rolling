import React from 'react'
import {Card, Button} from 'react-bootstrap'

const PagoRechazado = () => {
  return(<>
  <>
 
 <Card className="text-center m-5">
   <Card.Header className="bg-danger text-white"><h5>¡ Pago Rechazado !</h5></Card.Header>
 
 <Card.Body>
 <i class="fas fa-exclamation-triangle text-danger fa-4x"></i>
 <br></br>
 <br></br>
   <Card.Text>
     <strong><h5>Hubo un error al procesar tu pago</h5></strong>
   </Card.Text>
   <Button variant="primary">Volver</Button>
 </Card.Body>
 <Card.Footer className="text-muted bg-danger text-white">2 days ago</Card.Footer>
</Card>
  </>
   </>)
}

export default PagoRechazado;