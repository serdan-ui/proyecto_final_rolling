import React, { useState, useEffect } from "react";
import { Col, Card, Container, Row, Button, Modal } from "react-bootstrap";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axiosInstance from "../util/axiosInstance";

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
    render: () => (
      <a onClick={()=>editarProd()}>
        <EditOutlined />
        Editar
      </a>
    ),
  },
  {
    dataIndex: "",
    key: "x",
    render: () => (
      <a>
        <DeleteOutlined />
        Eliminar
      </a>
    ),
  },
];

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const traerProducto = async () => {
    const response = await axiosInstance.get("/producto");
    setProductos(response.data.productos);
    console.log(response);
  };
  useEffect(() => {
    traerProducto();
  }, []);

    const editarProd = () =>{
      <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
    }


  return (
    <>
      <p className="titulo_product_main">Productos</p>

      <Container>
        <Table 
          editarProd={editarProd}
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
      </Container>
    </>
  );
};

export default Productos;
