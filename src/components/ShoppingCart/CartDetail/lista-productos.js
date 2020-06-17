import React, { useState, Fragment } from "react";
import ProductCard from "./product-card";
import "./styles.css";

export const ListaProductos = ({productos}, props) => {
  
  return (
    <Fragment>
      {productos.map((producto, index) => (
        <ProductCard
          key={index}
          nombre={producto.nombre}
          precio={producto.precio}
          descripcion={producto.descripcion}
          imagen={producto.imagen}
          cantidad={producto.cantidad}
        />
      ))}
      
      
    </Fragment>
  );
};

export default ListaProductos;
