import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Avatar from "../Images/avatarprueba.png";
import Rochy from "../Images/rochy.png";
import Sergio from "../Images/sergio.png";
import Nicole from "../Images/nicole1.jpeg";
import Mariana from "../Images/mariana.png";
import Silvia from "../Images/silvia.png";
import Mauricio from "../Images/mauricio.png";
import HeaderStatic from "../Layout/HeaderStatic";
// stilos de register
import "./styles.css";

const PageService = () => {
  return ( 
    <>
   <HeaderStatic/>
    <Container fluid className="bodyPadre" >
      <Row>
        <Col xs={12} xl={6}>
          {" "}
          <h1 className="text-center textos m-3 text-white animate__heartBeat animate__delay-5s	5s">
            {" "}
            NUESTROS SERVICIOS
          </h1>
          <Container fluid>
            {" "}
            <Row>
              <Col xs={12}  className="nuestroServ">
                {" "}
                <h4 className="textos text-center">
                  {" "}
                  SOMOS SERVICIO OFICIAL de las principales marcas de audio y
                  video.
                </h4>
                <br></br>
                <p>
                  {" "}
                  
                    Reparamos TV,LCD,LED , monitores,DVD,BLU,RAY,Camaras
                    digitales
                    filmadoras, Equipos de audio- minicomponentes,home cinema,
                    PLAY STATION (PS),computadoras , microondas{" "}
                  
                </p>
                <br></br>

                <h3 className="text-center textos">QUIENES SOMOS</h3>
                <br></br>
                <p className="p-3">
                  {" "}
                  
                    Electronica Zero es un servicio técnico donde se realizan
                    reparaciones de productos electrónicos de todas las
                    marcas,tenemos técnicos especializados.
                    Trabajamos con repuestos originales y entregamos garantías
                    escritas. Financiamos con tarjetas, Recibimos débito y
                    crédito.{" "}
                  
                </p>
              </Col>{" "}
             
              {/* <Col xs={12} xl={6} className="nuestroServ">
                {" "}
                <h4 className="text-center">QUIENES SOMOS</h4>
                <br></br>
                <p>
                  {" "}
                  <strong>
                    Electronica Zero es un servicio técnico donde se realizan
                    reparaciones de productos electrónicos de todas las
                    marcas,tenemos técnicos especializados. <br></br>
                    Trabajamos con repuestos originales y entregamos garantías
                    escritas. Financiamos con tarjetas, Recibimos débito y
                    crédito.{" "}
                  </strong>
                </p>
              </Col> */}
            </Row>
          </Container>
        </Col>

        {/*COMINEZA SEGUNDA PARTE DE SERVICIOS*/}
        <Col>
          <Container>
            <Row>
              <Col xs={12} xl={6} >
                {" "}
                <h4 className="titulo m-3">Audio</h4>
                <i class="ml-5 fas fa-volume-up fa-5x"></i>
                <br></br>
                <span>
                  Reparamos equipos de audio con y sin garantía. Empleamos
                  repuestos originales.
                </span>
              </Col>
              <Col className="m-3">
                {" "}
                <h4 className="titulo">Tv Digital</h4>
                <i class="ml-5 fas fa-tv fa-5x"></i>
                <br></br>
                <span>
                  Se hacen reparaciones de tv led y lcd, monitores y
                  computadores.
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xl={6} >
                {" "}
                <h3 className="titulo">Responsabilidad</h3>
                <i class="ml-5 far fa-clock fa-5x"></i> <br></br>
                <span>
                  Empleamos los mejores instrumentos de medición electrónica.
                  Repuestos originales.
                </span>
              </Col>
              <Col className="m-3">
                {" "}
                <h4 className="titulo">Soporte</h4>
                <i class="ml-5 fas fa-phone fa-5x"></i>
                <br></br>
                <span>Ofrecemos garantía escrita de nuestros trabajos.</span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <hr></hr>
      <Row className="justify-content-xl-center contenedor-persona">
        <Col xs={12} xl={2} className="contenedorPersona">
          {" "}
          <div className="persona roundedCircle " style={{ padding: "5px" }}>
            {" "}
            <img style={{ height: "190px" }} src={Rochy} className="imagen-pers"/>{" "}
            <div className="nombre-imagen">
              {" "}
              <p >Rosario Scarlata</p>
            </div>
          </div>{" "}
        </Col>
        <Col xs={12} xl={2}>
          {" "}
        </Col>
        <Col xs={12} xl={2}>
          {" "}
          <div className="persona roundedCircle ">
          
            {" "}
            <img style={{ height: "190px" }} src={Sergio} className="imagen-pers" />
            <div className="nombre-imagen">
              {" "}
              <p >Sergio Rosales</p>
            </div>
          </div>
        </Col>
        <Col xs={12} xl={2}>
          {" "}
        </Col>
        <Col xs={12} xl={2}>
          {" "}
          <div className="persona roundedCircle ">
            <img style={{ height: "190px" }} src={Nicole} className="imagen-pers" />
            <div className="nombre-imagen">
              {" "}
              <p >Nicole Romero</p>
            </div>
          </div>

        </Col>
      </Row>
      <Row className="justify-content-xl-center pt-5 contenedor-persona">
        <Col xs={12} xl={2}>
          {" "}
        </Col>
        <Col xs={12} xl={2}>
          {" "}
          <div className="persona roundedCircle ">
            <img style={{ height: "190px" }} src={Silvia} className="imagen-pers" />
            <div className="nombre-imagen">
              {" "}
              <p > Silvia Granara</p>
            </div>
          </div>
        </Col>
        <Col xs={12} xl={2}>
          {" "}
        </Col>
        <Col xs={12} xl={2}>
          {" "}
          <div className="persona roundedCircle ">
            <img style={{ height: "190px" }} src={Mariana} className="imagen-pers" />
            <div className="nombre-imagen">
              {" "}
              <p >Mariana Granara</p>
            </div>
          </div>
        </Col>
        <Col xs={12} xl={2}>
          {" "}
        </Col>
      </Row>
      <Row className="justify-content-xl-center pt-5 contenedor-persona">
        <Col xs={12} xl={2}>
         
        </Col>
        <Col xs={12} xl={2}>
        
        </Col>
        <Col xs={12} xl={2}>
          {" "}
          <div className="persona roundedCircle ">
          
            {" "}
            <img style={{ height: "190px" }} src={Mauricio} className="imagen-pers" />
            <div className="nombre-imagen">
              {" "}
              <p >Mauicio Dranizareck</p>
            </div>
          </div>
        </Col>
        <Col xs={12} xl={2}>
          {" "}
        </Col>
        <Col xs={12} xl={2}>
        
        

        </Col>
    </Row>
    </Container>
    </>
  );
};

export default PageService;
