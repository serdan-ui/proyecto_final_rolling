import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./NewsPanel.css";

const NewsPanel = () => {
  const [noticia, setNoticia] = useState({
    titulo: "",
    descripcion: {
      lanzamiento: "",
      generos: [],
      rating: "",
      tiendas: [{ nombre: "", url: "" }],
    },
    imagen: "",
  });
  const [numeroAleatorio, setNumeroAleatorio] = useState(
    Math.floor(Math.random() * 19)
  );

  const [validandoCompra, setValidandoCompra] = useState();
  function simularCargando() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }
  useEffect(() => {
    if (validandoCompra) {
      simularCargando().then(() => {
        setValidandoCompra(false);
      });
    }
  }, [validandoCompra]);

  const GenerarNumeroAleatorio = () => {
    setNumeroAleatorio(Math.floor(Math.random() * 19));
  };

  useEffect(() => {
    const noticiaStorage = {
      titulo: "",
      descripcion: {
        lanzamiento: "",
        generos: [],
        rating: "",
        tiendas: [],
      },
      imagen: "",
    };

    fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "da21e69965msh29b942b58a24f5ep10aea9jsna2960dd4b46b",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        noticiaStorage.titulo = response.results[numeroAleatorio].name;
        noticiaStorage.imagen =
          response.results[numeroAleatorio].background_image;
        noticiaStorage.descripcion.lanzamiento =
          response.results[numeroAleatorio].released;
        response.results[numeroAleatorio].genres.map((genero) =>
          noticiaStorage.descripcion.generos.push(genero.name)
        );
        noticiaStorage.descripcion.rating =
          response.results[numeroAleatorio].rating;

        response.results[numeroAleatorio].stores.map((tienda) =>
          noticiaStorage.descripcion.tiendas.push({
            nombre: tienda.store.name,
            url: tienda.url_en,
          })
        );
      })
      .then(() => setNoticia(noticiaStorage))
      .catch((err) => {
        console.log(err);
      });
  }, [numeroAleatorio]);

  return (
    <Container fluid id="news-panel-container">
      <Container>
        <Row className="d-flex flex-column flex-lg-row">
          <Col className="p-5">
            <Row className="d-flex flex-column">
              <Col className="mb-2">
                <Row className="d-flex flex-column align-items-center justify-content-center">
                  <Col className="d-flex justify-content-center text-uppercase text-nowrap mb-2">
                    <h2
                      id="news-title"
                      className="w-100 text-white d-flex justify-content-center"
                    >
                      {noticia.titulo}
                    </h2>
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <Image
                      fluid
                      id="news-image-small"
                      className="shadow rounded mb-4"
                      src={noticia.imagen}
                    />
                  </Col>
                  <Col className="text-white text-justify mb-4">
                    <Row className="d-flex flex-column">
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-white font-weight-bolder">
                          Lanzamiento:{" "}
                        </h5>
                        <p className="font-italic">
                          {noticia.descripcion.lanzamiento}
                        </p>
                      </Col>
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-white font-weight-bolder">
                          Categorías:{" "}
                        </h5>
                        <p className="font-italic">
                          {noticia.descripcion.generos.map((genero) => {
                            return noticia.descripcion.generos[
                              noticia.descripcion.generos.length - 1
                            ] === genero
                              ? genero + "."
                              : genero + ", ";
                          })}
                        </p>
                      </Col>
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-white font-weight-bolder">
                          Rating:{" "}
                        </h5>
                        <p className="font-italic">
                          {noticia.descripcion.rating}
                        </p>
                      </Col>
                      <Col className="d-flex flex-column justify-content-start align-items-center">
                        <Row className="d-flex flex-column justify-content-center align-items-center">
                          <Col className="d-flex justify-content-center">
                            <h5 className="text-white font-weight-bolder">
                              Disponible en:{" "}
                            </h5>
                          </Col>
                          <Col className="text-white font-weight-lighter font-italic">
                            {noticia.descripcion.tiendas.map((tienda) => {
                              return noticia.descripcion.tiendas[
                                noticia.descripcion.tiendas.length - 1
                              ] === tienda ? (
                                <a
                                  href={tienda.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white"
                                >
                                  {tienda.nombre + "."}
                                </a>
                              ) : (
                                <a
                                  href={tienda.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white"
                                >
                                  {tienda.nombre + ", "}
                                </a>
                              );
                            })}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="">
                <Row className="">
                  <Col className="d-flex justify-content-center">
                    <Button
                      id={validandoCompra?"BtnSiguiente-disabled":"BtnSiguiente"}
                      className="w-100 text-uppercase"
                      variant="dark"
                      onClick={() =>
                        GenerarNumeroAleatorio() || setValidandoCompra(true)
                      }
                      disabled={validandoCompra}
                    >
                      {validandoCompra ? (
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Siguiente"
                      )}
                    </Button>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Button
                      id="BtnComprar"
                      className="w-100 text-white text-uppercase"
                      variant="outline-primary"
                      onClick={() =>
                        window.open(
                          noticia.descripcion.tiendas[0].url,
                          "_blank"
                        )
                      }
                    >
                      Comprar!
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="p-5 d-flex align-items-start justify-content-center">
            <Row id="news-image-container" className="shadow rounded">
              <Image id="news-image" src={noticia.imagen} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NewsPanel;
