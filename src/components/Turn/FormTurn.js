import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormsRepair from "./FormsRepair";
import "react-datepicker/dist/react-datepicker.css";
import FormBuy from "./FormBuy";
import FormComercial from "./FormComercial";
import axiosInstance from "../util/axiosInstance";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const FormTurn = (userId) => {
  let history = useHistory();
  const [forms, setForms] = useState("reparacion");
  const [data, setData] = useState(null);

  const enviarTurno = async (Turno) => {
    try {
      const response = await axiosInstance.post("/turno", Turno);
      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      
    }
 
  };

  const { register, handleSubmit, control, reset, errors } = useForm();
  const onSubmit = (data) => {
    setData(data);
    const {
      fecha,
      hora,
      descripcion,
      servicio,
      precio,
      dispositivo,
      marca,
      estado,
    } = data;
    
    const newTurno = {
      fecha,
      hora,
      servicio,
      descripcion,
      precio,
      dispositivo,
      marca,
      estado,
      usuario: userId.userId.userId,
    };
   
    enviarTurno(newTurno);

    reset();
  };
  const onChangeSelet = (e) => {
   
    let typeForm = e.target.value;
    setForms(typeForm);
  };

  const typeForms = ({ register, control }) => {
    if (forms === "reparacion") {
      return (
        <FormsRepair register={register} control={control} errors={errors} />
      );
    } else if (forms === "venta") {
      return <FormBuy register={register} control={control} errors={errors} />;
    } else if (forms === "comercial") {
      return (
        <FormComercial register={register} control={control} errors={errors} />
      );
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
        <option value="reparacion">Reparación</option>
        <option value="venta">Ventas</option>
        <option value="comercial">Asesoramiento comercial</option>
      </select>
      {typeForms({ register, control })}
      <input type="submit" />
    </form>
  );
};

export default FormTurn;
