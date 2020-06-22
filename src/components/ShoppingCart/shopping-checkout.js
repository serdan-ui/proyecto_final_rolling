import React, { Fragment, useState, useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ShippingDetail from "./ShippingDetail/shipping-detail";
import ShoppingCart from "./CartDetail/ShoppingCart";
import Fotter from "../Layout/Fotter";
import HeaderStatic from "../Layout/HeaderStatic";
import ResumenCompra from "./resumen-compra";
import PaymentDetail from "./PaymentDetail/payment-detail";
import productos from "../Main/basedatos";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShoppingCheckout = () => {
  //Carrito
  const [carrito, setCarrito] = useState(() => {
    let carro = productos;
    carro.map((producto) => (producto.cantidad = 1));
    return carro;
  });

  //Para resumen-compra
  const [subtotal, setSubtotal] = useState(() => {
    let subtotal = 0;
    carrito.map(
      (producto) => (subtotal += producto.precio * producto.cantidad)
    );
    return subtotal;
  });

  const [envio, setEnvio] = useState(0);
  const [impuestos, setImpuestos] = useState(subtotal * 0.21);

  const CalcularSubtotal = () => {
    let subtotal = 0;
    carrito.map(
      (producto) => (subtotal += producto.precio * producto.cantidad)
    );
    console.log(carrito);
    setSubtotal(subtotal);
    setImpuestos(subtotal * 0.21);
  };

  //Slider
  const sliderSettings = {
     draggable: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const SliderContainer = useRef();

  const SliderSiguiente = () => {
    SliderContainer.current.slickNext();
  };

  const SliderAnterior = () => {
    SliderContainer.current.slickPrev();
  };

  return (
    <Fragment>
      <HeaderStatic />

      <Container className="shopping-detail-container rounded mt-5 mb-5">
        <Row>
          <Col>
            <Slider ref={SliderContainer} {...sliderSettings}>
              <ShoppingCart
                carrito={carrito}
                setCarrito={setCarrito}
                calcularSubtotal={CalcularSubtotal}
                sliderSiguiente={SliderSiguiente}
              />
              <ShippingDetail
                sliderSiguiente={SliderSiguiente}
                sliderAnterior={SliderAnterior}
              />
              <PaymentDetail sliderAnterior={SliderAnterior}/>
            </Slider>
          </Col>

          <Col md="4">
            <ResumenCompra
              subtotal={subtotal}
              envio={envio}
              impuestos={impuestos}
            />
          </Col>
        </Row>
      </Container>

      <Fotter />
    </Fragment>
  );
};

export default ShoppingCheckout;
