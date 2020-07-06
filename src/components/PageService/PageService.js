import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Rochy from "../Images/rochy.png";
import Sergio from "../Images/sergio.png";
import Nicole from "../Images/nicole1.jpeg";
import Mauricio from "../Images/mauricio.png";
import Loguito from "../Images/Zero-Images/Zero-Tech-Purple.svg";
import HeaderStatic from "../Layout/HeaderStatic";
import Footer from "../Layout/Fotter";
// stilos de register
import "./styles.css";

const PageService = ({ authen, setAuthen, usuario }) => {
  return (
    <>
      <Container fluid >
        <div className="img-service-container">
          <div className="back-service-color"></div>
        </div>
        <HeaderStatic authen={authen} setAuthen={setAuthen} usuario={usuario} />

        <Container className="main-container shadow p-3 mt-4 mb-4 d-flex flex-column justify-content-center">
          <div className="w-100 d-flex justify-content-center mt-5">
          <Image fluid src={Loguito} className="w-50"/>
          </div>
          <Row className="d-flex flex-column justify-content-center p-5">
            <Col>
              <h1 className="text-center textos text-justify">QUIENES SOMOS</h1>
            </Col>
            <Col className="p-3 text-center font-italic">
              <h4 className="font-weight-light">ZeroTech - 2020 - Arg</h4>
            </Col>
            <Col>
              <p className="p-3 text-center text-justify">
                Zerotech posee un servicio técnico donde se realizan
                reparaciones de productos electrónicos de todas las
                marcas,tenemos técnicos especializados. Trabajamos con repuestos
                originales y entregamos garantías escritas. Financiamos con
                tarjetas, Recibimos débito y crédito.
              </p>
            </Col>
          </Row>

          <Row className="d-flex flex-column justify-content-center p-5 mt-3">
            <Col>
              <h1 className="text-center textos text-justify">NUESTROS SERVICIOS</h1>
            </Col>
            <Col className="p-3 text-center font-italic">
              <h4 className="font-weight-light">
                SOMOS SERVICIO OFICIAL de las principales marcas de audio y
                video.
              </h4>
            </Col>
            <Col>
              <p className="p-3 text-center text-justify">
                Reparamos TV,LCD,LED , monitores, DVD, BLU, RAY, Camaras
                digitales filmadoras, Equipos de audio- minicomponentes, home
                cinema, PLAY STATION (PS), computadoras , microondas.
              </p>
            </Col>
            <Col className="p-2">
              <Row className="d-flex flex-column flex-md-row">
                <Col className="p-3">
                  <Row className="d-flex flex-column justify-content-center align-items-center">
                    <Col className="d-flex  justify-content-center align-items-center">
                      <i class="fas fa-volume-up fa-5x"></i>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center">
                      <h4 className="titulo m-3 p-3 text-center text-justify">Audio</h4>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center text-center text-justify">
                      <p>
                        Reparamos equipos de audio con y sin garantía. Empleamos
                        repuestos originales.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="p-3">
                  <Row className="d-flex flex-column justify-content-center align-items-center">
                    <Col className="d-flex  justify-content-center align-items-center">
                      <i class="fas fa-tv fa-5x"></i>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center">
                      <h4 className="titulo m-3 p-3 text-center text-justify">Tv Digital</h4>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center  text-center text-justify">
                      <p>
                        Hacemos reparaciones de tv led y lcd, monitores y
                        computadores.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="p-3">
                  <Row className="d-flex flex-column justify-content-center align-items-center">
                    <Col className="d-flex  justify-content-center align-items-center">
                      <i class="far fa-clock fa-5x"></i> <br></br>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center">
                      <h4 className="titulo m-3 p-3 text-center text-justify">Responsabilidad</h4>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center  text-center text-justify">
                      <p>
                        Empleamos los mejores instrumentos de medición
                        electrónica. Repuestos originales.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="p-3">
                  <Row className="d-flex flex-column justify-content-center align-items-center">
                    <Col className="d-flex  justify-content-center align-items-center">
                      <i class=" fas fa-phone fa-5x"></i>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center">
                      <h4 className="titulo m-3 p-3 text-center text-justify">Soporte</h4>
                    </Col>
                    <Col className="d-flex  justify-content-center align-items-center  text-center text-justify">
                      <p>Ofrecemos garantía escrita de nuestros trabajos.</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="d-flex flex-column flex-sm-row justify-content-around align-items-center mb-5 mt-5">
            <Col xs="auto" className="container-persona">
              <Image src={Rochy} className="rounded-circle shadow persona" />
              <div className="nombre-imagen d-flex justify-content-center align-items-center">
                <p>Rosario Scarlata</p>
              </div>
            </Col>
            <Col xs="auto" className="container-persona">
              <Image src={Sergio} className="rounded-circle shadow persona" />
              <div className="nombre-imagen d-flex justify-content-center align-items-center">
                <p>Sergio Rosales</p>
              </div>
            </Col>
            <Col xs="auto" className="container-persona">
              <Image src={Nicole} className="rounded-circle shadow persona" />
              <div className="nombre-imagen d-flex justify-content-center align-items-center">
                <p> Nicole Romero</p>
              </div>
            </Col>
            <Col xs="auto" className="container-persona">
              <Image src={Mauricio} className="rounded-circle shadow persona" />
              <div className="nombre-imagen d-flex justify-content-center align-items-center">
                <p> Mauricio Draniczarek</p>
              </div>
            </Col>
          </Row>
          {/* <Row className=" justify-content-xl-center contenedor-persona">
            <Col xs={12} xl={2} className="contenedorPersona">
              
              <div className="persona roundedCircle">
                
                <img src={Rochy} className="imagen-pers" alt="photo" />
                <div className="nombre-imagen">
                  
                  <p>Rosario Scarlata</p>
                </div>
              </div>
            </Col>

            <Col xs={12} xl={2}>
              
              <div className="persona roundedCircle ">
                
                <img alt="photo" src={Sergio} className="imagen-pers" />
                <div className="nombre-imagen">
                  
                  <p>Sergio Rosales</p>
                </div>
              </div>
            </Col>

            <Col xs={12} xl={2}>
              
              <div className="persona roundedCircle ">
                <img alt="photo" src={Nicole} className="imagen-pers" />
                <div className="nombre-imagen">
                  
                  <p>Nicole Romero</p>
                </div>
              </div>
            </Col>

            <Col xs={12} xl={2}>
              
              <div className="persona  ">
                
                <img alt="photo" src={Mauricio} className="imagen-pers" />
                <div className="nombre-imagen">
                  
                  <p>Mauicio Dranizareck</p>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default PageService;
