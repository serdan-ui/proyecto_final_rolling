import React, { useState, useEffect } from 'react';
import {Col, Card, Container, Row, CardColumns} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import axiosInstance from '../util/axiosInstance';

const columns = [
    { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
    { title: 'Precio', dataIndex: 'precio', key: 'precio' },
    {
        title: 'Accion',
        dataIndex: '',
        key: 'x',
        render: () => <a ><EditOutlined />Edit</a>,
      },
    {
      
      dataIndex: '',
      key: 'x',
      render: () => <a ><DeleteOutlined />Delete</a>,
    },
  ];
  
 
const Productos = () => {
  const [productos, setProductos] = useState([])

    const traerProducto = async()=>{
      const response = await axiosInstance.get("/producto")
      setProductos(response.data.productos)
      console.log(response)
    } 
    useEffect(()=>{
      traerProducto();
    }, [])


    return (<> 
    <p className="titulo_product_main">Productos</p>
     
     <Container>
     <Table
      columns={columns}
      expandable={{
        expandedRowRender: record => <p style={{ margin: 0 }}>{record.descripcion}</p>,
        rowExpandable: record => record.nombre !== 'Not Expandable',
      }}
      dataSource={productos}
    />
     </Container>   
    
    </>);
}
 
export default Productos;