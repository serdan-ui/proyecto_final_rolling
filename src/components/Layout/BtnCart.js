import React, { useState } from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { render } from "@testing-library/react";

const BtnCart = (products) => {
  const [cartOpen, setCartOpen] = useState(false);

  const cierroCarro = () => {
    setCartOpen(false);
  };

  const abreCarro = () => {
    setCartOpen(true);
  };

  console.log(products.products);

  let clase;
  {
    cartOpen ? (clase = "btnCartOpen") : (clase = "cuerpoCart");
  }

  return (
    <>
      <div className={clase}>
        <Button className="btnCart_header mr-2" onClick={abreCarro}>
          {" "}
          <FaCartPlus className="icons_header_cart" />
          <Badge variant="dark">
            {products.products.length}
          </Badge>
        </Button>
        <Button className="cartClose" onClick={cierroCarro}>
          Cancelar
        </Button>
        <ListGroup className="containerCart">
          {products.products.lenght === 0
            ? null
            : products.products.map((product) => (
                <ListGroup.Item>{product.nombre}</ListGroup.Item>
              ))}
        </ListGroup>
      </div>
    </>
  );
};

export default BtnCart;
