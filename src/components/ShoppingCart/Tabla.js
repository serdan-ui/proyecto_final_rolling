import React, { useState, Fragment } from "react";
import "./styles.css";
import CuponModal from "./CuponModal";



export const Tabla = (props) => {
  console.log(props.datosProductos);
  return (
    <div className="hijoone">
      <div className="tabla">
        <table className="tabla">
          <tr>
            <th>Tu Compra</th>
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
            <td >Envio</td>
          </tr>
          <tr>
            <td>TOTAL</td>
          </tr>
        </table>
        <a className="botonPagar btn btn-secondary mt-3"  href="#" >Pagar</a>
      </div>
    </div>
  );
};

export default Tabla;
