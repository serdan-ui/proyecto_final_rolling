import React, {useState, setSmShow} from "react";
import { Container, Button, Row, Col, Table,Modal } from "react-bootstrap";

import CuponModal from "./CuponModal";

import  ListaProductos  from "./ListaProductos";





   
// stilos de register
import "./styles.css";

const ShoppingCart = (props) => {

  
  return (

    <div className="contenedor">
      <div> 
      <ListaProductos />
      </div>
      <div className="hijoone">
        
        <div className="tabla">
          <Table>
            <tr>
              <th>Resumen</th>
            </tr>
            <tr>
              <td> <Button onClick={() => setSmShow(true)}>Small modal</Button></td>
            </tr>
            <tr>
              <td>subtotal</td>
            </tr>
            <tr>
              <td>Envio</td>
            </tr>
            <tr>
              <td> <span> TOTAL</span></td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
 
