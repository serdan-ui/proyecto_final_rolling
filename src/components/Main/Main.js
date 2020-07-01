import React, { useState, Fragment } from "react";
import Carrousel from "./Carrousel";
import Mostrador from "./Mostrador";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/Header";

// stilos de register
import "./styles.css";

const Main = ({authen,setAuthen,usuario, setCarrito, userId ,products , setProducts}) => {
  
  setAuthen(localStorage.getItem("Token"));
  
  


  return (
    <Fragment>
      <Header products={products} 
      authen={authen}
      setAuthen={setAuthen}
      usuario={usuario}
      setCarrito={setCarrito}
      userId={userId}
      setProducts={setProducts}
      />
      <Carrousel />
      <Mostrador setProducts={setProducts} products={products} />
      <Fotter />
    </Fragment>
  );
};

export default Main;
