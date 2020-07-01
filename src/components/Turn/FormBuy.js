import React from 'react';
import {   Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const FormBuy = ({ register, control }) => {
   
    return ( <>
        <label>Que tipo de dispositivo quieres vender</label>
        <select name="dispositivo" ref={register}>
          <option value="pc">pc</option>
          <option value="celular">celular</option>
          <option value="tablet">tablet</option>
          <option value="notebok">notebok</option>
        </select>
        <label>Marca</label>
        <input name="marca" type="text" placeholder="ejemplo: motorola G4" ref={register}/>
        <label>Estado</label>
        <select name="estado" ref={register}>
          <option value="nuevo">nuevo</option>
          <option value="usado2">usado</option>
          <option value="roto">roto con arreglo</option>
          <option value="repuesto">para repuesto</option>
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
          minDate={new Date()}
        />
      </section>
      <label>selecciona una hora</label>
      <select name="hora" ref={register}>
      <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
      </select>
        </> );
}
 
export default FormBuy;