import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ShippingDetail from "./ShippingDetail/shipping-detail";
import ShoppingCart from "./CartDetail/ShoppingCart";
import Fotter from "../Layout/Fotter";
import HeaderStatic from "../Layout/HeaderStatic";
import ResumenCompra from "./CartDetail/resumen-compra";
import PaymentDetail from "./PaymentDetail/payment-detail";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShoppingCheckout = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <HeaderStatic />

      <Container className="shopping-detail-container rounded mt-5 mb-5">
        <Row>
          <Col>
            <Slider {...settings}>
              <ShoppingCart />
              <ShippingDetail />
              <PaymentDetail/>
            </Slider>
          </Col>

          <Col md="4" className="mt-5">
            <ResumenCompra />
          </Col>
        </Row>
      </Container>

      <Fotter />
    </div>
  );
};

export default ShoppingCheckout;
