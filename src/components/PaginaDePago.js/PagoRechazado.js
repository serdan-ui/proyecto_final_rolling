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
   <h5> <strong>Hubo un error al procesar tu pago</strong> </h5>
   </Card.Text>
   <br></br>
 <br></br>
   <Button variant="primary">Volver</Button>
 </Card.Body>
 <Card.Footer className="bg-danger text-white">2 days ago</Card.Footer>
</Card>

  </>
   </>)
}

export default PagoRechazado;