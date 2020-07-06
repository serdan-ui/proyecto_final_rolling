import React, { useState } from "react";
import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const FormComercial = ({ register, control, errors }) => {
  const [dispositivo, setDispositivo] = useState("pc");

  const onChangeDevice = (e) => {
    let typeDevice = e.target.value;
    setDispositivo(typeDevice);
  };

  const changeDevice = () => {
    if (dispositivo === "pc") {
      return (
        <>
          <label>Marca</label>
          <select name="marca" ref={register}>
            <option value="Apple">Apple</option>
            <option value="Hp">Hp</option>
            <option value="Lenovo">Lenovo</option>
          </select>
        </>
      );
    } else if (dispositivo === "celular") {
      return (
        <>
          <label>Marca</label>
          <select name="marca" ref={register}>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Motorola">Motorola</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
        </>
      );
    } else if (dispositivo === "tablet") {
      return (
        <>
          <label>Marca</label>
          <select name="marca" ref={register}>
            <option value="samsung">samsung</option>
            <option value="Apple">Apple</option>
            <option value="Motorola">Motorola</option>
          </select>
        </>
      );
    } else if (dispositivo === "notebook") {
      return (
        <>
          <label>Marca</label>
          <select name="marca" ref={register}>
            <option value="lenovo">lenovo</option>
            <option value="Apple">Apple</option>
            <option value="Exo">Exo</option>
            <option value="Dell">Dell</option>
            <option value="Hp">Hp</option>
          </select>
        </>
      );
    }
  };
  return (
    <>
      <label>¿Que equipo estás buscando?</label>
      <select
        name="dispositivo"
        ref={register}
        onChange={(e) => {
          onChangeDevice(e);
        }}
      >
        <option value="pc">pc</option>
        <option value="celular">celular</option>
        <option value="tablet">tablet</option>
        <option value="notebook">notebook</option>
      </select>
      {changeDevice()}

      {dispositivo === "pc" || dispositivo === "notebook" ? (
        <>
          <label>
            Descripción del dispositivo
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>ejemplo: procesador , uso del dispositivo ...</strong>
                  .
                </Tooltip>
              }
            >
              <InfoTwoToneIcon
                style={{
                  marginLeft: "0.7rem",
                  fontSize: "1.2rem",
                  opacity: "0.9",
                }}
              />
            </OverlayTrigger>
          </label>
          <textarea name="descripcion" ref={register({ required: true, maxLength: 50 })} />
          {errors.descripcion?.type === "required" && (
            <span
              style={{
                color: "red",
                fontSize: "0.8rem",
                opacity: "0.6",
                fontWeight: "bolder",
                paddingBottom:"0"
              }}
            >
              Campo obligatorio
            </span>
          )}
          {errors.descripcion?.type === "maxLength" &&
        (
          <span
            style={{
              color: "red",
              fontSize: "0.8rem",
              opacity: "0.6",
              fontWeight: "bolder",
              paddingBottom: "0",
            }}
          >
            Maximos caracateres 50.
          </span>
        )}
        </>
      ) : null}

      <label>
        Cantidad de gasto (pesos){" "}
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>ejemplo: 1000</strong>.
            </Tooltip>
          }
        >
          <InfoTwoToneIcon
            style={{ marginLeft: "0.7rem", fontSize: "1.2rem", opacity: "0.8" }}
          />
        </OverlayTrigger>
      </label>
      <input type="number" name="precio" ref={register({ required: true })} />
      {errors.precio && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            opacity: "0.6",
            fontWeight: "bolder",
            paddingBottom:"0"
          }}
        >
          Campo obligatorio
        </span>
      )}
      <label>Elegir fecha</label>
      <section className="date">
        <Controller
          as={ReactDatePicker}
          control={control}
          valueName="selected"
          onChange={([selected]) => selected}
          name="fecha"
          placeholderText="Selecciona fecha"
          dateFormat="dd/MM/yyyy"
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
    </>
  );
};

export default FormComercial;
