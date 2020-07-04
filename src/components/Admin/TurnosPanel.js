import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axiosInstance from "../util/axiosInstance";
import moment from "moment";
import "moment/locale/es";

import "./style.css";

const TurnosPanel = () => {
  const [turnos, setTurnos] = useState([]);

  const traerTurnos = async () => {
    try {
      const response = await axiosInstance.get("/turno");
      setTurnos(response.data.turnos);
      console.log(response.data.turnos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    traerTurnos();
  }, []);

  const ModificarFecha = (fecha) => {
    return moment(fecha).format("l ");
  };
  // const ModificarHora = (hora) =>{
  //   return moment(hora).format('LT')
  // }

    const eliminarTurno = async(_id) => {
      await axiosInstance.delete(`/turno/${_id}`)
      traerTurnos();
    }
  return (
    <>
      <div className="container text-center ">
        <h2 className="text-white">Turnos asignados</h2>
        <div className="row">
          {" "}
          {turnos.map((turnoPersona, index) => (
            <Card
              key={turnoPersona._id}
              className="turnoAsignado"
              style={{
                width: "18rem",
                backgroundColor: "#2B2C2B",
                color: "white",
                margin: "20px",
              }}
            >
              <Card.Body>
                <Card.Title>Nombre: {turnoPersona.usuario.username} </Card.Title>
                <Card.Text>
                  <ul>
                    <li> Tipo de consulta: {turnoPersona.marca} </li>
                    <li>Fecha: {ModificarFecha(turnoPersona.fecha)}</li>
                    <li>Hora: {turnoPersona.hora}</li>
                  </ul>
                </Card.Text>
                <Button variant="success" onClick={()=>eliminarTurno(turnoPersona._id)}>Eliminar Turno</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TurnosPanel;
