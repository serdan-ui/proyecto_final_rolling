import React, {useState, useEffect} from "react";
import { Col, Row, Container, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import HeaderStatic from '../Layout/HeaderStatic';
import moment from "moment";
import "moment/locale/es";

import "./style.css";

const PerfilUsuario = ({authen, setAuthen, usuario}) => {
  let history = useHistory();
  const [ventas, setVentas] = useState([]);

  const traerVentas = async () => {
    if (usuario._id) {
      try {
        const response = await axiosInstance.get(`/venta/${usuario._id}`);
        setVentas(response.data);
       
        
      } catch (error) {
        
      }
    }
    
  };
  useEffect(() => {
    traerVentas();
  }, [usuario]);

  
  const Fecha = () => {
    return moment().format("Do [de] MMMM [del] YYYY, h:mm a");
  };

  return (
    <>
     <HeaderStatic
     authen={authen}
     setAuthen={setAuthen}
     usuario={usuario}
    />
      <Container fluid className="padrePerfil">
       <br/>
        <h2 className="text-center text-white comprasRe"> Mi Perfil</h2>
        <div className="contenedorImgPer">
          <Row className="perfilUsuario  shadow">
            <div className="xl-col-4 lg-col-4 xs-col-10 unoIMG">
              <img
                src="https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
                className="imgperfil"
              ></img>
            </div>
            <div className="xl-col-8 lg-col-8 xs-col-10  dosIMG">
              <br></br> <p>Nombre: {usuario.username}</p>
              <br></br>
              <p>Apellido: {usuario.email}</p>
            </div>
          </Row>
        </div>
        <div className="p-3">
          <h2 className="comprasRe">Compras realizadas</h2>
          <Table striped bordered hover variant="dark" className="shadow">
            <thead>
              <tr>
               
               <th>Fecha</th>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            {ventas.map((venta, index) =>(
               <tr>
                <td>{Fecha(venta.creado)}</td>
            <td>{venta.productos.map((p)=><>•{p.nombre} <br/></>)}</td>
            <td>{venta.productos.map((p)=><>{p.cantidad} <br/></>)}</td>
              <td>{venta.total}</td>
             </tr>

            ))}
             
              
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default PerfilUsuario;
