import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Carrousel = () => {
  return (
    <Container fluid >
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/photo1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/photo2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/photo3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carrousel;
