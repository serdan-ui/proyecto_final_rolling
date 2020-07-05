import React from "react";
import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const FormBuy = ({ register, control, errors }) => {
  return (
    <>
      <label>Que tipo de dispositivo quieres vender</label>
      <select name="dispositivo" ref={register}>
        <option value="pc">pc</option>
        <option value="celular">celular</option>
        <option value="tablet">tablet</option>
        <option value="notebok">notebok</option>
      </select>
      <label>
        Marca y modelo{" "}
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>ejemplo: motorola G4</strong>.
            </Tooltip>
          }
        >
          <InfoTwoToneIcon
            style={{ marginLeft: "0.7rem", fontSize: "1.2rem", opacity: "0.8" }}
          />
        </OverlayTrigger>
      </label>
      <input
        name="marca"
        type="text"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.marca && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            opacity: "0.6",
            fontWeight: "bolder",
            paddingBottom: "0",
          }}
        >
          Campo obligatorio
        </span>
      )}
      <label>Estado</label>
      <select name="estado" ref={register}>
        <option value="nuevo">nuevo</option>
        <option value="usado2">usado</option>
        <option value="roto">roto con arreglo</option>
        <option value="repuesto">para repuesto</option>
      </select>
      <label>
        Descripcion del dispositivo
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>ejemplo: si tiene la caja , cables etc.</strong>.
            </Tooltip>
          }
        >
          <InfoTwoToneIcon
            style={{ marginLeft: "0.7rem", fontSize: "1.2rem", opacity: "0.8" }}
          />
        </OverlayTrigger>
      </label>
      <textarea
        name="descripcion"
        ref={register({ required: true, maxLength: 50 })}
      />

      {errors.descripcion?.type === "required" && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            opacity: "0.6",
            fontWeight: "bolder",
            paddingBottom: "0",
          }}
        >
          Campo obligatorio
        </span>
      )}
      {errors.descripcion?.type === " maxLength" && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            opacity: "0.6",
            fontWeight: "bolder",
            paddingBottom: "0",
          }}
        >
          Maximo de caracteres 50
        </span>
      )}
      <label>
        Precio estimado de venta (pesos){" "}
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
      <input
        type="number"
        name="precio"
        ref={register({ required: true, min: 100, max: 100000 })}
      />
      {errors.precio && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            opacity: "0.6",
            fontWeight: "bolder",
            paddingBottom: "0",
          }}
        >
          Campo obligatorio
        </span>
      )}
      <label>Elegir fecha</label>
      <section>
        <Controller
          as={ReactDatePicker}
          control={control}
          valueName="selected"
          onChange={([selected]) => selected}
          name="fecha"
          placeholderText="Selecciona fecha"
          className="date"
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
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

export default FormBuy;
