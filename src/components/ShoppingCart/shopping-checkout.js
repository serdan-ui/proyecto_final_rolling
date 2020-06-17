import React, { useState, useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ShippingDetail from "./ShippingDetail/shipping-detail";
import ShoppingCart from "./CartDetail/ShoppingCart";
import Fotter from "../Layout/Fotter";
import HeaderStatic from "../Layout/HeaderStatic";
import ResumenCompra from "./resumen-compra";
import PaymentDetail from "./PaymentDetail/payment-detail";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShoppingCheckout = () => {
  
  const slickSettings = {
    /* draggable: false, */
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const datosProductos = [
    {
      id: 1,
      nombre: "Mouse 'REN4ZI'",
      precio: 300,
      cantidad: 6,
      descripcion: "Nos agarramos tan fuerte, que nos cansamos tan rapidamente",
      imagen:
        "https://tecnologiasinlimites.com/wp-content/uploads/2019/08/Logitech-G502-hero-Mouse-Gamer-1.jpg",
    },
    {
      id: 2,
      nombre: "Teclado 'NOSABELOQUETA'",
      precio: 1000,
      cantidad: 2,
      descripcion: "Llegamo al punto, lejano y oscuro",
      imagen:
        "https://www.puntodigital.com.ar/productos/1578922530/01_1578922530.jpg",
    },
    {
      id: 3,
      nombre: "Monitor 'DAME2LINCE'",
      precio: 5000,
      cantidad: 2,
      descripcion:
        "No puedo explicar qué pasó, solo puedo decirte que no funcionó",
      imagen:
        "https://s3-sa-east-1.amazonaws.com/saasargentina/D8E3pYuKCe3UI5P0pneJ/imagen",
    },
  ];

  const CalcularSubtotal = () =>{
    let subtotal = 0;
    datosProductos.forEach(producto => {
      subtotal += (producto.cantidad * producto.precio);
    });

    return subtotal;
  }

  const [detalleCompra, setDetalleCompra] = useState(datosProductos)

  const [subtotal, setSubtotal] = useState("0");
  const [envio, setEnvio] = useState("0"); 
  const [impuestos, setImpuestos] = useState("0");
  const [total, setTotal] = useState("0");

  

  return (
    <div>
      <HeaderStatic />

      <Container className="shopping-detail-container rounded mt-5 mb-5">
        <Row>
          <Col>
            <Slider {...slickSettings}>
              <ShoppingCart productos={detalleCompra} />
              <ShippingDetail />
              <PaymentDetail />
            </Slider>
            <button>Calcular</button>
          </Col>

          <Col md="4" className="mt-5">
            <ResumenCompra subtotal={subtotal} envio={envio} impuestos={impuestos} total={total} />
          </Col>
        </Row>
      </Container>

      <Fotter />
    </div>
  );
};

export default ShoppingCheckout;
