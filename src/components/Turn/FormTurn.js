import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import FormsRepair from "./FormsRepair"
import "react-datepicker/dist/react-datepicker.css";
import FormBuy from "./FormBuy";


const FormTurn = () => {
  const [forms, setForms] = useState(1);
  const [data, setData] = useState(null);

  const { register, handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    setData(data);
    console.log(data);
  };
  const onChangeSelet = (e) => {
    console.log(e.target.value);
    let typeForm = e.target.value;
    setForms(parseInt(typeForm));
  };

  const typeForms = () => {
    if (forms === 1) {
      return <FormsRepair/>;
    } else if (forms === 2) {
      return (<FormBuy/>);
    } else if (forms === 3) {
      return (<>
      <label>¿Que equipo estas buscando?</label>
      <select name="dispositivo" ref={register}>
          <option value="1">pc</option>
          <option value="2">celular</option>
          <option value="3">tablet</option>
          <option value="4">notebok</option>
        </select>
      </>);
    }
  };
  return (
    <form className="containerForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Turno para </label>
      <select
        name="servicio"
        ref={register}
        onChange={(e) => {
          onChangeSelet(e);
        }}
      >
        <option value="1">Reparacion</option>
        <option value="2">Ventas</option>
        <option value="3">Acesoramiento comercial</option>
      </select>
      {typeForms()}
      <input type="submit" />
    </form>
  );
};

export default FormTurn;
