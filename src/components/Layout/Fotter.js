/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import fbIcon from "../assets/icons/facebook.svg";
import fbIcon2 from "../assets/icons/facebook2.svg";
import twIcon from "../assets/icons/twitter.svg";
import instaIcon from "../assets/icons/instagram.svg";
import "./styles.css";

const Fotter = () => {
  return (
    <Container fluid className="container_footer">
      <Row>
        <Col className="footer_info">
          <Col>
            <Row className="d-flex flex-column">
              <Col className="d-flex justify-content-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.6963141745546!2d-65.20809053997758!3d-26.83722958293365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1589921416940!5m2!1ses-419!2sar"
                  width="300"
                  height="200"
                  frameborder="0"
                  style={{ marginRight: 0 + "em" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  className="mt-4 rounded"
                ></iframe>
                <br />
              </Col>
              <Col className="d-flex justify-content-center mt-3 mb-4">
                <span>
                  <a
                    href="https://g.page/RollingCodeSchool?share"
                    target="noopener noreferrer"
                  >
                    {" "}
                    Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán{" "}
                  </a>
                </span>{" "}
              </Col>
            </Row>
          </Col>
         
        </Col>

        <div class="vl"></div>

        <Col className="footer_redes">
          <div className="social-menu">
            <ul>
              <li>
                <a href="#">
                  <Image
                    src={fbIcon2}
                    height="60"
                    className="media-icon"
                    rounded
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={twIcon} className="media-icon" rounded />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={instaIcon} className="media-icon" rounded />
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <div class="vl"></div>

        <Col className="footer_menu">
          <Row>
            <Col className="footer_submenu">
              <h5 className="h-25 d-flex justify-content-center align-items-end mb-4 footer-titulo">
                Main Menu
              </h5>
              <ul className="d-flex flex-column">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Help</a>
              </ul>
            </Col>
            <Col className="footer_submenu">
              <h5 className="h-25 d-flex justify-content-center align-items-end mb-4 footer-titulo">
                Company
              </h5>
              <ul className="d-flex flex-column">
                <a href="#">The Company</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </ul>
            </Col>
            <Col className="footer_submenu">
              <h5 className="h-25 d-flex justify-content-center align-items-end mb-4 footer-titulo">
                Find us on
              </h5>
              <ul className="d-flex flex-column">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </ul>
            </Col>
          </Row>
        </Col>
      
      </Row>
    </Container>
  );
};

export default Fotter;
