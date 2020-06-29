import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormsRepair from "./FormsRepair";
import "react-datepicker/dist/react-datepicker.css";
import FormBuy from "./FormBuy";
import FormComercial from "./FormComercial"

const FormTurn = () => {
  const [forms, setForms] = useState(1);
  const [data, setData] = useState(null);
  

  const { register, handleSubmit, control ,reset} = useForm();
  const onSubmit = (data) => {
    setData(data);
    console.log(data);
    reset()
  };
  const onChangeSelet = (e) => {
    console.log(e.target.value);
    let typeForm = e.target.value;
    setForms(parseInt(typeForm));
  };

  

  const typeForms = ({register,control}) => {
    if (forms === 1) {
      return <FormsRepair 
      register={register}
      control={control}
      />;
    } else if (forms === 2) {
      return <FormBuy 
      register={register}
      control={control}
      />;
    } else if (forms === 3) {
      return <FormComercial
      register={register}
      control={control}
      />
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
      {typeForms({register,control})}
      <input type="submit" />
    </form>
  );
};

export default FormTurn;
