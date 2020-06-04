import React, { useState, Fragment } from "react";
import ProductCard from "./product-card";
// stilos de register
import "./styles.css";

export const ListaProductos = () => {
  const datosProductos = [
    {
      nombre: "Mouse 'REN4ZI'",
      precio: 300,
      cantidad: 6,
      descripcion:
        "Nos agarramos tan fuerte, que nos cansamos tan rapidamente",
      imagen: "https://tecnologiasinlimites.com/wp-content/uploads/2019/08/Logitech-G502-hero-Mouse-Gamer-1.jpg",
    },
    {
      nombre: "Teclado 'NOSABELOQUETA'",
      precio: 1000,
      cantidad: 2,
      descripcion:
        "Llegamo al punto, lejano y oscuro",
      imagen: "https://www.puntodigital.com.ar/productos/1578922530/01_1578922530.jpg",  
    },
    {
      nombre: "Monitor 'DAME2LINCE'",
      precio: 5000,
      cantidad: 2,
      descripcion:
        "No puedo explicar qué pasó, solo puedo decirte que no funcionó",
      imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/D8E3pYuKCe3UI5P0pneJ/imagen",
    },
  ];

  return (
    <Fragment>
      {datosProductos.map((item) => (
        <ProductCard
          nombre={item.nombre}
          precio={item.precio}
          descripcion={item.descripcion}
          imagen={item.imagen}
          cantidad={item.cantidad}
        />
      ))}
      
      
    </Fragment>
  );
};

export default ListaProductos;
