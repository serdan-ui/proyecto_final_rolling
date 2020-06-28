import React , {useState} from 'react';
import {Table, Container,Tooltip  , OverlayTrigger } from "react-bootstrap"
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import MydModalWithGrid from './modalInfoTurno';


const ListTurn = () => {

  const [modalShow, setModalShow] = useState(false);

    return ( 
        <Container >
        <Table striped bordered hover variant="dark" style={{backgroundColor:"#212121"}} >
  <thead style={{color:"#19ed18"}}>
    <tr >
      <th >Fecha</th>
      <th>Hora</th>
      <th>Motivo</th>
      <th>Descripcion y mas ...</th>
      <th >Cancelar Turno<OverlayTrigger 
   
       placement="top"
       overlay={
         <Tooltip id={`tooltip-top`}>
          <strong>Los turnos solo se pueden cancelar 24hs antes</strong>.
         </Tooltip>
       }
      ><InfoTwoToneIcon  style={{marginLeft:"0.7rem" , fontSize:"1.2rem", opacity:"0.8"}} /></OverlayTrigger></th>
    </tr>
  </thead>
  <tbody style={{color:"#30cd68"}}>
    <tr>
      <td>22/12/2020</td>
      <td>17:30</td>
      <td>Reparacion</td>
      <td><button className="btnForm" onClick={() => setModalShow(true)}><span style={{color:"#19ed18", fontSize:"14px", padding:"0px"}}>Ver mas...</span></button></td>
      <td><button className="btnFormCancel " ><span style={{color:"#121212", fontSize:"14px", fontWeight:"800", padding:"0px"}}><b>Cancelar </b></span></button></td>
    </tr>
    </tbody>
    </Table>
    <MydModalWithGrid show={modalShow}   onHide={() => setModalShow(false)} nombre="sergio"/>
    </Container>
     );
}
 
export default ListTurn;