import React, { useState } from "react";
import Carrousel from "./Carrousel";
import Mostrador from "./Mostrador";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/Header";
// stilos de register
import "./styles.css";

const Main = ({authen,setAuthen,usuario, setCarrito}) => {
  const [products, setProducts] = useState([]);
  setAuthen(localStorage.getItem("Token"));
  


  return (
    <>
      <Header products={products} 
      authen={authen}
      setAuthen={setAuthen}
      usuario={usuario}
      setCarrito={setCarrito}
      />
      <Carrousel />
      <Mostrador setProducts={setProducts} products={products} />
      <Fotter />
    </>
  );
};

export default Main;
