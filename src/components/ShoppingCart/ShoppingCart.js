import React, { useState } from "react";
import  ListaProductos from "./ListaProductos";
import Tabla from "./Tabla";
import Tarjeta from "./Tarjeta";

   
// stilos de register
import "./styles.css";


 const ShoppingCart = () => {

  

  /*const ListaProductos = ( ) => {
     const datosProductos = [
        {name: 'Mouse', precio: 300, id: 1, descripcion: 'Debido a su diseño eficaz, este mouse convencional te brindará comodidad y una gran experiencia de uso. Además, su sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales'},
        {name: 'teclado', precio: 1000, id: 2, descripcion: 'Este teclado Logitech será tu mejor complemento para hacer todo tipo de actividades en la pc'},
        {name: 'monitor', precio: 5000, id: 3, descripcion: 'Este teclado Logitech será tu mejor complemento para hacer todo tipo de actividades en la pc'}
    ]
    const  [productos, setProductos] = useState(ListaProductos);*/

  return (
    
    <div className="contenedor">
      <div>
       <ListaProductos/>
        <Tarjeta/>
      </div>
      <Tabla/>

      
      
    </div>
  );
}

export default ShoppingCart;
 
