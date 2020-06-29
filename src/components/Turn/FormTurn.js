import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormsRepair from "./FormsRepair";
import "react-datepicker/dist/react-datepicker.css";
import FormBuy from "./FormBuy";
import FormComercial from "./FormComercial"

const FormTurn = () => {
  const [forms, setForms] = useState(1);
  const [data, setData] = useState(null);
  

  const { register, handleSubmit } = useForm();
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
      return <FormsRepair />;
    } else if (forms === 2) {
      return <FormBuy />;
    } else if (forms === 3) {
      return <FormComercial/>
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
        <option value="1">Reparación</option>
        <option value="2">Ventas</option>
        <option value="3">Asesoramiento comercial</option>
      </select>
      {typeForms()}
      <input type="submit" />
    </form>
  );
};

export default FormTurn;
