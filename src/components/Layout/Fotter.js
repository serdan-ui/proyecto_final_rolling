import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const Fotter = () => {
  return (
    <Container fluid className="container_footer">
      <Row>
        <Col xs={4} className="footer_info">
          <p>
            Direccion :{" "}
            <span>
              <a href="https://g.page/RollingCodeSchool?share" target="_blank">
                {" "}
                Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán{" "}
              </a>
            </span>{" "}
          </p>
          <p>Telefono</p>
          <p>Email</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.6963141745546!2d-65.20809053997758!3d-26.83722958293365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1589921416940!5m2!1ses-419!2sar"
            width="400"
            height="300"
            frameborder="0"
            style={{ marginRight: 0 + "em" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className="footer_redes">
          <div className="social-share fb">
            <span className="fb-inner"></span>
            <a className="cta fb">Like</a>
          </div>
          <div className="social-share tw">
            <span className="tw-inner"></span>
            <a className="cta tw">Tweet</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="footer-copy">copiraith</Col>
      </Row>
    </Container>
  );
};

export default Fotter;
