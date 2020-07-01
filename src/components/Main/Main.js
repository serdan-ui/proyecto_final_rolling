import React, { useState } from "react";
import Carrousel from "./Carrousel";
import Mostrador from "./Mostrador";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/Header";


// stilos de register
import "./styles.css";
import axiosInstance from "../util/axiosInstance";

const Main = ({authen,setAuthen,usuario, setCarrito, userId ,products , setProducts}) => {
  
  setAuthen(localStorage.getItem("Token"));
  
  const fetchCarrito = async (user) => {
    const id = user;
    const response = await axiosInstance.get(`/cart/${id}`);
   if(response.data.carrito[0]===undefined){
     
   }else{
    setProducts(response.data.carrito[0].productos);
   }
  
  };


  return (
    <>
      <Header products={products} 
      authen={authen}
      setAuthen={setAuthen}
      usuario={usuario}
      setCarrito={setCarrito}
      userId={userId}
      setProducts={setProducts}
      fetchCarrito={fetchCarrito}
      />
      <Carrousel />
      <Mostrador setProducts={setProducts} products={products} userId={userId} fetchCarrito={fetchCarrito} />
      <Fotter />
    </>
  );
};

export default Main;
