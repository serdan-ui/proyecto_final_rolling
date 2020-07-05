import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axiosInstance from "../util/axiosInstance";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  const traerVentas = async () => {
    try {
      const response = await axiosInstance.get("/venta");
      setVentas(response.data);
  
    } catch (error) {
      
    }
  };
  useEffect(() => {
    traerVentas();
  }, []);
 
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
            <th>Cantidad</th>
            <th>Total V</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((vendido, index) => (
            <tr>
              <td>{index}</td>
              <td>{vendido.nombre}</td>
              <td>{vendido.productos[0].nombre}</td>
              <td>{vendido.productos[0].cantidad}</td>
              <td>{vendido.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Ventas;
