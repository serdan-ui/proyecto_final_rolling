import React from 'react';
import {  useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const FormBuy = () => {
    const { register, handleSubmit, control, reset } = useForm();
    return ( <>
        <label>Que tipo de dispositivo quieres vender</label>
        <select name="dispositivo" ref={register}>
          <option value="1">pc</option>
          <option value="2">celular</option>
          <option value="3">tablet</option>
          <option value="4">notebok</option>
        </select>
        <label>Marca</label>
        <input name="marca" type="text" placeholder="ejemplo: motorola G4" ref={register}/>
        <label>Estado</label>
        <select name="dispositivo" ref={register}>
          <option value="1">nuevo</option>
          <option value="2">usado</option>
          <option value="3">roto con arreglo</option>
          <option value="4">para repuesto</option>
        </select>
        <label>Descripcion del dispositivo</label>
        <textarea name="descripcion" ref={register} placeholder="ejemplo: exelente estado, o pantalla rota ..." />
        <label>Precio estimado de venta (pesos)</label>
        <input type="number" name="precio" placeholder="ejemplo: 1000" ref={register}/>
      <label>Elegir fecha</label>
      <section >
        <Controller
          as={ReactDatePicker}
          control={control}
          valueName="selected"
          onChange={([selected]) => selected}
          name="fecha"
          placeholderText="Selecciona fecha"
          className="date"
        />
      </section>
      <label>selecciona una hora</label>
      <select name="hora" ref={register}>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
      </select>
        </> );
}
 
export default FormBuy;