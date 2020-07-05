import React, {useState, useEffect} from "react";
import { Col, Row, Container, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import HeaderStatic from '../Layout/HeaderStatic';
 
import "./style.css";

const PerfilUsuario = ({authen, setAuthen, usuario}) => {
  let history = useHistory();
  const [ventas, setVentas] = useState([]);

  // const traerVentas = async () => {
  //   try {
  //     const response = await axiosInstance.get(`/venta/${usuario/_id}`);
  //     setVentas(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   traerVentas();
  // }, []);
  // console.log(ventas);
  return (
    <>
     <HeaderStatic
     authen={authen}
     setAuthen={setAuthen}
     usuario={usuario}
    />
      <Container fluid className="padrePerfil">
        <Button className="btnVolverPerf" onClick={() => history.push("/main")}>
          Volver
        </Button>
        <h2 className="text-center text-white comprasRe"> Mi Perfil</h2>
        <div className="contenedorImgPer">
          <Row className="perfilUsuario">
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
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre producto</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default PerfilUsuario;
