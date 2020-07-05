import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import axiosInstance from "../util/axiosInstance"
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

const AgregProd = () => {
  const { register, handleSubmit , reset} = useForm();


  //funcion para cargar producto
  const onSubmit = async(data) => {
   
    try {
      const response = await axiosInstance.post("/producto", data)
    Swal.fire({
      position: "center",
      icon: "success",
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
reset()
    } catch (error) {
      
    }
    
  }

  return (
    <>
      <Container fluid>
        <br />
        <h1 className="text-center text-white">Nuevo Producto </h1>
        <form  
          onSubmit={handleSubmit(onSubmit)}
        ><label>Nombre del producto</label>
          <input
            name="nombre"
            ref={register({ required: true, maxLength: 100 })}
          />
          <label>Categoria</label>
          <input name="tipo" ref={register({required:true})} />
          <label>Precio</label>
          <input
            name="precio"
            type="number"
            ref={register({ min: 1, max: 100000 })}
          />
          <label>Stock</label>
          <input
            name="stock"
            type="number"
            ref={register({ min: 1, max: 100000 })}
          />
          <label>Descripcion del Producto</label>
          <textarea name="descripcion"ref={register({required:true})} />
          <label>Imagen del Producto</label>
          <input name="imagen" ref={register({required:true})}/>
          <input type="submit" />
        </form>
      </Container>
    </>
  );
};

export default AgregProd;
