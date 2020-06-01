import React, { useState, Fragment } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// stilos de register
import "./styles.css";


 const Tarjeta = ({setProductos,productos,name,precio,descripcion,id}) => {

  
const deleteProduct =(id ) =>{

 setProductos([ ...productos,
    productos.filter(producto => producto.id !== id )])

  console.log(productos)
}






  

  return (
    <div className="hijo">

      <div className="foto">
        <img src="https://via.placeholder.com/150"></img>
      </div>
      <div className="datosProducto">
        <div>
          <h2 className="producto">{name}</h2>
        </div>
        <div className="cajaDesc">
          <p className="descripcion">{descripcion}</p>
        </div>
        <div>
          <h3 className="precio">Precio: ${precio}</h3>
        </div>
      <span>Cantidad</span>
        <input className="cantidad"  type="number" min="1" max="9" />
       
        <IconButton aria-label="delete"  className="borrar" onClick= {() => deleteProduct(id)}>
        <DeleteIcon  />
      </IconButton>
      </div>
    </div>
  );
};

export default Tarjeta;
