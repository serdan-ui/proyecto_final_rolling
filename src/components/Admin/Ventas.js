import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axiosInstance from "../util/axiosInstance";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  const traerVentas = async () => {
    try {
      const response = await axiosInstance.get("/venta");
      setVentas(response.data.ventas);
      console.log(response.data.ventas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    traerVentas();
  }, []);
  console.log(ventas);
  return (
    <>
      <br />
      <h1 className="text-center text-white">Ventas realizadas</h1>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Nombre producto</th>
            <th>Total V</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((vendido, index) => (
            <tr>
              <td>{index}</td>
              <td>{vendido.username}</td>
              <td>{vendido.productos.nombre}</td>
              <td>{vendido.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Ventas;
