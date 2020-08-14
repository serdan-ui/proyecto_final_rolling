import React, { useState, useEffect } from "react";
import { Table, Container, Tooltip, OverlayTrigger } from "react-bootstrap";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import MydModalWithGrid from "./modalInfoTurno";
import axiosInstance from "../util/axiosInstance";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";

const ListTurn = (userId) => {
  const [turnos, setTurnos] = useState([]);
  const [data, setData] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const ModificarFecha = (fecha) => {
    return moment(fecha).format("dddd Do [de] MMMM [del] YYYY ");
  };

  const fetchTurnos = async () => {
    //_id usuario
    if (userId.userId.userId !== undefined) {
      const _id = userId.userId.userId;

      const response = await axiosInstance.get(`/turno/${_id}`);

      const { message, turnos } = response.data;
      if (message) {
        const msg = message;
        setTurnos({ msg });
      } else if (turnos) {
        setTurnos(turnos);
      }
    }
  };
  useEffect(() => {
    fetchTurnos();
        //eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      //
    };
        //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [userId]);

  const borrarTurno = async (_id) => {
    
    try {
      const response = await axiosInstance.delete(`/turno/${_id}`);
      Swal.fire({
       position: "center",
       icon: "success",
       title: response.data.message,
       showConfirmButton: false,
       timer: 1500,
     });
    
     fetchTurnos();
    } catch (error) {
      
    }
   
  };

  //cargar datos en el modal
  const cargarData = (data) => {
    setModalShow(true);
    setData(data);
  };

  return (
    <Container>
      {turnos.msg ? (
        <h4 className="text-white text-center pt-3 lg">{turnos.msg}</h4>
      ) : (
        <Table
          responsive="sm"
          responsive="md"
          responsive="lg"
          striped
          bordered
          hover
          variant="dark"
          style={{ backgroundColor: "#212121" }}
          className="TablaTurno"
        >
          <thead style={{ color: "#19ed18" }}>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Motivo</th>
              <th>Descripcion y mas ...</th>
              <th>
                Cancelar Turno
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>
                        Los turnos solo se pueden cancelar 24hs antes
                      </strong>
                      .
                    </Tooltip>
                  }
                >
                  <InfoTwoToneIcon
                    style={{
                      marginLeft: "0.7rem",
                      fontSize: "1.2rem",
                      opacity: "0.8",
                    }}
                  />
                </OverlayTrigger>
              </th>
            </tr>
          </thead>
          <tbody style={{ color: "#30cd68" }}>
            {turnos.map((turno) => (
              <>
                <tr key={turno._id}>
                  <td>{ModificarFecha(turno.fecha)}</td>
                  <td>{turno.hora}</td>
                  <td>{turno.servicio}</td>
                  <td>
                    <button
                      className="btnForm"
                      onClick={() => cargarData(turno)}
                    >
                      <span
                        style={{
                          color: "#19ed18",
                          fontSize: "14px",
                          padding: "0px",
                        }}
                      >
                        Ver mas...
                      </span>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnFormCancel "
                      onClick={() => borrarTurno(turno._id)}
                    >
                      <span
                        style={{
                          color: "#121212",
                          fontSize: "14px",
                          fontWeight: "800",
                          padding: "0px",
                        }}
                      >
                        <b>Cancelar </b>
                      </span>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <MydModalWithGrid
            show={modalShow}
            onHide={() => setModalShow(false)}
            ModificarFecha={ModificarFecha}
            turno={data}
          />
        </Table>
      )}
    </Container>
  );
};

export default ListTurn;
