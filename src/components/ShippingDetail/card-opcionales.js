import React from "react";
import $ from "jquery";
import { Col, Row, Card, Form } from "react-bootstrap";

class CardOpcion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: this.props.color,
      selected: this.props.seleccionado
    };
  }

  Seleccionar = (e) => {
    if (this.state.selected === false) {
      this.setState({
        bgColor: "rgb(185, 183, 183)",
        selected: true
      })
    }
    else {
      this.setState({
        bgColor: "whitesmoke",
        selected: false
      })
    }  
  }

  render() {
    return (
      <Card
       className="card-tipo-envio" 
       onClick={this.Seleccionar}
       style={{backgroundColor: this.state.bgColor}}
       >
        <Card.Body>
          <Row>
            <Col sm="auto" className="d-flex align-items-center">
              <Form.Check checked={this.state.selected} type="radio" aria-label="radio 1" />
            </Col>
            <Col>
              <Card.Title>{this.props.titulo}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.descripcion}
              </Card.Subtitle>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CardOpcion;
