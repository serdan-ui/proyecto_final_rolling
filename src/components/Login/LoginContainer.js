import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
// import Fab from "@material-ui/core/Fab";

const LoginConteiner = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    e.target.reset();
  };

  return (
    <Container className="form-login">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center text-white">Iniciar sesion</h3>

        <Form.Label>Ingrese su nombre de usuario</Form.Label>
        <Form.Control
          placeholder="Nombre"
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

        <Form.Group>
          <Form.Label>Ingrese su contraseña</Form.Label>
          <Form.Control
            placeholder="password"
            type="password"
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
        </Form.Group>

        <Form.Group className="btn-redes">
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
        </Form.Group>

        <Button className="btn-lg  btn-dark btn-block" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default LoginConteiner;
