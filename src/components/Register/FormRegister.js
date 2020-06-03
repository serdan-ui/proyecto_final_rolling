import React from "react";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import Fab from "@material-ui/core/Fab";

const FormRegister = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    e.target.reset();
  };

  return (
    <Container className="container_reg">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="container_titulo_reg">Registro</h3>
        <Form.Group as={Row}>
          <Col>
            <FormControl
              placeholder="Nombre"
              className="form-control"
              autoComplete="off"
              name="usuario"
              ref={register({
                required: {
                  value: true,
                  message: "Nombre es requerido. ",
                },
                maxLength: {
                  value: 12,
                  message: "No más de 12 carácteres!",
                },
                minLength: {
                  value: 2,
                  message: "Mínimo 2 carácteres",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.usuario && errors.usuario.message}
            </span>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Col>
            <FormControl
              placeholder="Email"
              label="Email"
              autoComplete="off"
              className="form-control"
              type="email"
              name="Email"
              ref={register({
                required: {
                  value: true,
                  message: "Email es requerido. ",
                },
                maxLength: {
                  value: 40,
                  message: "No más de 40 carácteres!",
                },
                minLength: {
                  value: 5,
                  message: "Mínimo 5 carácteres",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.Email && errors.Email.message}
            </span>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Col>
            <FormControl
              placeholder="Contraseña"
              label="Contraseña"
              type="password"
              className="form-control"
              name="Password"
              ref={register({
                required: {
                  value: true,
                  message: "Contraseña es requerido. ",
                },
                maxLength: {
                  value: 20,
                  message: "No más de 20 carácteres!",
                },
                minLength: {
                  value: 5,
                  message: " Contraseña con mínimo 5 carácteres. ",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.Password && errors.Password.message}
            </span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Col>
            <FormControl
              placeholder="Confirmar Contraseña"
              label="ContraseñaConfirm"
              type="password"
              className="form-control"
              name="passwordConfirm"
              ref={register({
                required: {
                  value: true,
                  message: "Contraseña es requerido. ",
                },
                maxLength: {
                  value: 20,
                  message: "No más de 20 carácteres!",
                },
                minLength: {
                  value: 5,
                  message: " Contraseña con mínimo 5 carácteres. ",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </span>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col className="btn-redes">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={`tooltip-$'bottom'`}>Ingresar con</Tooltip>}
            >
              <Fab color="primary" size="small" aria-label="add">
                <FaFacebookSquare />
              </Fab>
            </OverlayTrigger>{" "}
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={`tooltip-$'bottom'`}>Ingresar con</Tooltip>}
            >
              <Fab color="secondary" size="small" aria-label="edit">
                <FaGoogle />
              </Fab>
            </OverlayTrigger>{" "}
          </Col>
        </Form.Group>
        <Form.Group>
          <Col>
            <Button type="submit" className="btn-lg  btn-dark btn-block btn-env">
              Enviar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FormRegister;
