import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Carrousel = () => {
  return (
    <Container fluid >
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/celucarrousel.jpg"
            alt="First slide"
            style={{
              maxHeight:"80vh"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/tecladocarrousel.jpg"
            alt="Third slide"
            style={{
              maxHeight:"80vh"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/serviciotecnico.jpg"
            alt="Third slide"
            style={{
              maxHeight:"80vh"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/tecnologia.jpg"
            alt="Four slide"
            style={{
              maxHeight:"80vh"
            }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carrousel;
