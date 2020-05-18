import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import "./styles.css";

const Fotter = () => {
    return (  <Container  fluid className='container_footer'>
        <Row>
            <Col xs={4} className="footer_info">
            <h5>Direccion</h5>
            <h5>Telefono</h5>
            <h5>Email</h5>

            </Col>
            <Col xs={2} className="footer-copy">
            copiraith
            </Col>
            <Col xs={6} className="footer_redes" >
            <div className="social-share fb">
			<span className="fb-inner"></span>
			<a className="cta fb" href="#">Like</a>
		</div>
		<div className="social-share tw">
			<span className="tw-inner"></span>
			<a className="cta tw" href="#">Tweet</a>
		</div>
            </Col>
        </Row>
    </Container>);
}
 
export default Fotter;