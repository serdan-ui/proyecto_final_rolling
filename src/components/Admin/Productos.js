import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "antd/dist/antd.css";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axiosInstance from "../util/axiosInstance";
import Modalsito from "./modal";
import Swal from "sweetalert2";

const Productos = () => {
  const [show, setShow] = useState(false);
  const [datos, setDatos] = useState({});
  //funcion para cargar el modal
  const cargarDatos = (data) => {
    setDatos(data);
    setShow(true);
  };
  //funcion para eliminar un producto
  const borrarTurno = async (_id) => {
    try {
      const response = await axiosInstance.delete(`/producto/${_id}`);
      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      traerProducto();
    } catch (error) {}
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Accion",
      dataIndex: "",
      key: "x",
      render: (data) => (
        //eslint-disable-next-line
        <a onClick={() => cargarDatos(data)}>
          <EditOutlined />
          Editar
        </a>
      ),
    },
    {
      dataIndex: "",
      key: "x",
      render: (data) => (
       //eslint-disable-next-line
        <a onClick={() => borrarTurno(data._id)}>
          <DeleteOutlined />
          Eliminar
        </a>
      ),
    },
  ];
  const [productos, setProductos] = useState([]);

  const traerProducto = async () => {
    const response = await axiosInstance.get("/producto");
    setProductos(response.data.productos);
   
  };
  useEffect(() => {
    traerProducto();
  }, []);

  return (
    <>
      <p className="titulo_product_main">Productos</p>

      <Container>
        <Table
          
          bordered
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0, color: "black" }}>{record.descripcion}</p>
            ),
            rowExpandable: (record) => record.nombre !== "Not Expandable",
          }}
          dataSource={productos}
        />
        <Modalsito traerProducto={traerProducto} show={show} datos={datos} onHide={() => setShow(false)} />
      </Container>
    </>
  );
};

export default Productos;
