import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import PagoPendiente from "./PagoPendiente";
import PagoExitoso from "./PagoExitoso";
import PagoRechazado from "./PagoRechazado";
import axiosInstance from "../util/axiosInstance";

const Payment = () => {
  let { id } = useParams();

  const [estadoPago, setEstadoPago] = useState("");
  const [fecha, setFecha] = useState();
  //fucion de traer la compra con el id
  const traerCompra = async () => {
    const response = await axiosInstance.get(`/pago/${id}`);

    if (response.data === null) {
      return;
    } else {
      const estado = response.data.estadoVenta;
      const fechaCompra = response.data.creado;
      if (estado === "exitoso") {
        setFecha(fechaCompra);
        return setEstadoPago(estado);
      }
    }
  };
  useEffect(() => {
    if (id === "rechazado") {
      return setEstadoPago("rechazado");
    } else {
      traerCompra();
    }

    return () => {
      //
    };
  }, []);

  return (
    <>
      <Container>
        {estadoPago === "exitoso" ? <PagoExitoso fecha={fecha} /> : null}
        {estadoPago === "rechazado" ? <PagoRechazado /> : null}
        {estadoPago === "" ? <PagoPendiente /> : null}
      </Container>
    </>
  );
};

export default Payment;
