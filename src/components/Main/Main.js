import React, {  useEffect } from "react";
import Carrousel from "./Carrousel";
import Mostrador from "./Mostrador";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/Header";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

// stilos de register
import "./styles.css";
import axiosInstance from "../util/axiosInstance";

const Main = ({
  authen,
  setAuthen,
  usuario,
  setCarrito,
  userId,
  products,
  setProducts,
  autenticar,
}) => {
  setAuthen(localStorage.getItem("Token"));

  const fetchCarrito = async (user) => {
    const id = user;
    const response = await axiosInstance.get(`/cart/${id}`);
    if (response.data.carrito[0] === undefined) {
    } else {
      return setProducts(response.data.carrito[0].productos);
    }
  };

  useEffect(() => {
    autenticar();
  }, []);
  return (
    <>
    <ScrollUpButton 
             StopPosition = { 0 }
             ShowAtPosition = { 100 }
            
             AnimationDuration = { 500 }
          
            style={{zIndex:"1", background:"#19ed18"}}
      />
      <Header
        products={products}
        authen={authen}
        setAuthen={setAuthen}
        usuario={usuario}
        setCarrito={setCarrito}
        userId={userId}
        
        fetchCarrito={fetchCarrito}
      />
      <Carrousel />
      <Mostrador
        setProducts={setProducts}
        products={products}
        userId={userId}
        fetchCarrito={fetchCarrito}
        authen={authen}
      />
      <Fotter />
    </>
  );
};

export default Main;
