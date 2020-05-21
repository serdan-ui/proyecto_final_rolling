import React, { useState } from "react";
import Carrousel from "./Carrousel";
import Mostrador from "./Mostrador";
import Fotter from "../Layout/Fotter";
import Header from "../Layout/Header";
// stilos de register
import "./styles.css";

const Main = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header products={products} />
      <Carrousel />
      <Mostrador setProducts={setProducts} products={products} />
      <Fotter />
    </>
  );
};

export default Main;
