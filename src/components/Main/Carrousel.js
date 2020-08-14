import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import Loguito from "../Images/Zero-Images/Zero-Black.svg";

const Carrousel = () => {
  return (
    <Container fluid className="carrousel-container">
      <Carousel>
        <Carousel.Item>
          <Image 
            className="d-block w-100"
            src="/image/celucarrousel.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            className="d-block w-100"
            src="/image/tecladocarrousel.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            className="d-block w-100"
            src="/image/serviciotecnico.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            className="d-block w-100"
            src="/image/tecnologia.jpg"
            alt="Four slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carrousel;
