import React, { useState, Fragment } from "react";
import "./styles.css";
import CuponModal from "./CuponModal";
import { Button, Table } from "react-bootstrap";

export const Tabla = (props) => {
  console.log(props.ListaProductos);
  return (
    <div className="hijoone">
      <div className="tabla">
        <Table>
          <tr>
            <th>Resumen</th>
          </tr>
          <tr>
            <td>
              <CuponModal />
            </td>
          </tr>
          <tr>
            <td>producto1</td>
          </tr>
          <tr>
            <td>producto2</td>
          </tr>
          <tr>
            <td>producto3</td>
          </tr>
          <tr>
            <td>Subtotal</td>
          </tr>

          <tr>
            <td>Envio</td>
          </tr>
          <tr>
            <td>TOTAL</td>
          </tr>
        </Table>
      </div>
    </div>
  );
};

export default Tabla;
