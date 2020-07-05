import React from 'react';
import {Modal, Form, Button, Col, Row, } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import axiosInstance from "../util/axiosInstance";
import Swal from 'sweetalert2';

const Modalsito = (props) => {

  const { register, handleSubmit , reset} = useForm();


  //funcion para cargar producto
  const onSubmit = async (data) => {
    
    try {
      const _id= props.datos._id
    const response = await axiosInstance.put(`/producto/${_id}`, data)
    Swal.fire({
      position: "center",
      icon: "success",
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    props.traerProducto()
    reset()
    props.onHide()
    } catch (error) {
      
    }
    
   
  }


    return (
        
        <Modal {...props} aria-labelledby=" contained-modal-title-vcenter ">
        
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        <form  
          onSubmit={handleSubmit(onSubmit)}
        ><label>Nombre del producto</label>
          <input
          defaultValue={props.datos.nombre} 
            name="nombre"
            ref={register({ required: true })}
          />
          <label>Categoria</label>
          <input name="tipo" ref={register({required:true})} defaultValue={props.datos.tipo} />
          <label>Precio</label>
          <input
          defaultValue={props.datos.precio}
            name="precio"
            type="number"
            ref={register({ min: 1, max: 100000 })}
          />
          <label>Stock</label>
          <input
          defaultValue={props.datos.stock}
            name="stock"
            type="number"
            ref={register({ min: 1, max: 100000 })}
          />
          <label>Descripcion del Producto</label>
          <textarea name="descripcion"ref={register({required:true})} defaultValue={props.datos.descripcion} />
          <label>Imagen del Producto</label>
          <input name="imagen" ref={register({required:true})} defaultValue={props.datos.imagen}/>
          <input type="submit" value="guardar"/>
        </form>
       
        </Modal.Body>
      
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
       );
}
 
export default Modalsito;