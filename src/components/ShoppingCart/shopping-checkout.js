import React, { Fragment, useState, useRef, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import ShippingDetail from "./ShippingDetail/ShippingDetail";
import ShoppingCart from "./CartDetail/ShoppingCart";
import Fotter from "../Layout/Fotter";
import HeaderStatic from "../Layout/HeaderStatic";
import ResumenCompra from "./resumen-compra";
import PaymentDetail from "./PaymentDetail/payment-detail";
import axiosInstance from "../util/axiosInstance";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ShoppingCheckout = ({ authen, setAuthen, usuario, userId }) => {
  //datos de checkout
  const [detailCheckout, setDetailCheckout] = useState({
    nombre: "",
    apellido: "",
    direccion_1: "",
    direccion_2: "",
    postal: "",
    pais: "",
    prov: "",
    telefono: "",
    cupon: "",
    tarjeta: {
      cvc: "",
      expiracion: "",
      nombre: "",
      numero: "",
    },
    efectivo: "",
    total: "",
    subtotal: "",
    carrito: "",
    usuario: "",
    tipoEnvio: "",
  });

  //Carrito
  const [carrito, setCarrito] = useState([]);

  //funcion traer carrito
  const fetchCarrito = async (user) => {
    const id = user;
    const response = await axiosInstance.get(`/cart/${id}`);
    if (response.data.carrito[0] === undefined) {
    } else {
      setDetailCheckout({
        ...detailCheckout,
        carrito: response.data.carrito[0]._id,
        usuario: userId,
      });
      return setCarrito(response.data.carrito[0].productos);
    }
  };

  //Para resumen-compra
  const [subtotal, setSubtotal] = useState(() => {
    let subtotal = 0;
    carrito.map(
      (producto) => (subtotal += producto.precio * producto.cantidad)
    );
    return subtotal;
  });
  const [valorEnvio, setValorEnvio] = useState(0);
  const [valorImpuestos, setValorImpuestos] = useState(subtotal * 0.21);
  const [valorDescuento, setValorDescuento] = useState(0);

  const CalcularSubtotal = () => {
    let subtotal = 0;
    carrito.map(
      (producto) =>
        (subtotal += producto.productoId.precio * producto.cantidadProducto)
    );
    setSubtotal(subtotal);
    setValorImpuestos(subtotal * 0.21);
  };

  useEffect(() => {
    CalcularSubtotal();
  }, [carrito]);

  useEffect(() => {
    fetchCarrito(userId);
  }, [userId]);

  //Slider
  const sliderSettings = {
    swipe: false,
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
      <Container fluid className="background-checkout">
      <HeaderStatic authen={authen} setAuthen={setAuthen} usuario={usuario} />

      <Container className="shopping-detail-container rounded mt-5 mb-5">
        <Row className="shopping-detail-panel d-sm-flex flex-md-row flex-column-reverse">
          <Col>
            <Slider ref={SliderContainer} {...sliderSettings}>
              <ShoppingCart
                carrito={carrito}
                setCarrito={setCarrito}
                calcularSubtotal={CalcularSubtotal}
                sliderSiguiente={SliderSiguiente}
                fetchCarrito={fetchCarrito}
                userId={userId}
              />
              <ShippingDetail
                setDetailCheckout={setDetailCheckout}
                detailCheckout={detailCheckout}
                sliderSiguiente={SliderSiguiente}
                sliderAnterior={SliderAnterior}
                setValorEnvio={setValorEnvio}
              />
              <PaymentDetail
                sliderAnterior={SliderAnterior}
                setDetailCheckout={setDetailCheckout}
                detailCheckout={detailCheckout}
              />
            </Slider>
          </Col>

          <Col md="5" lg="4" className="mb-md-5">
            <ResumenCompra
              setDetailCheckout={setDetailCheckout}
              detailCheckout={detailCheckout}
              subtotal={subtotal}
              valorEnvio={valorEnvio}
              valorImpuestos={valorImpuestos}
              setDescuento={setValorDescuento}
              valorDescuento={valorDescuento}
            />
          </Col>
        </Row>
      </Container>

      <Fotter />
      </Container>
    </Fragment>
  );
};

export default ShoppingCheckout;