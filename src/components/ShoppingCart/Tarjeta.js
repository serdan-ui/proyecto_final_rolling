import React, { useState, Fragment } from "react";

// stilos de register
import "./styles.css";
import ListaProductos from "./ListaProductos";

export const Tarjeta = (props) => {
  const eliminarProducto = (id) => {
    console.log("eliminado");
  };

  return (
    <div className="hijo">
      <div className="foto">
        <img src="https://via.placeholder.com/150"></img>
      </div>
      <div className="datosProducto">
        <div>
          <h2 className="producto">{props.name}</h2>
        </div>
        <div className="cajaDesc">
          <p className="descripcion">{props.descripcion}</p>
        </div>
        <div>
          <h3 className="precio">Precio: ${props.precio}</h3>
        </div>
        <input className="cantidad" type="number" min="1" max="9" />
        <button onClick={() => eliminarProducto()} className="borrar">
          delete
        </button>
      </div>
    </div>
  );
};

export default Tarjeta;
