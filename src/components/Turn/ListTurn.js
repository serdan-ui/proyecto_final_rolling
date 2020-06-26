import React from 'react';
import {Table, Container , Col} from "react-bootstrap"


const ListTurn = () => {
    return ( 
        <Container >
        <Table striped bordered hover variant="dark" style={{backgroundColor:"#212121"}} >
  <thead style={{color:"#19ed18"}}>
    <tr >
      <th >Fecha</th>
      <th>Hora</th>
      <th>Motivo</th>
      <th>Descripcion y mas ...</th>
    </tr>
  </thead>
  <tbody style={{color:"#30cd68"}}>
    <tr>
      <td>22/12/2020</td>
      <td>17:30</td>
      <td>Reparacion</td>
      <td><button className="btnForm" ><span style={{color:"#19ed18", fontSize:"14px", padding:"0px"}}>Ver mas...</span></button></td>
    </tr>
    </tbody>
    </Table>
    </Container>
     );
}
 
export default ListTurn;