import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Container,
  OverlayTrigger,
  Tooltip,
  Row
} from "react-bootstrap";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import Fab from "@material-ui/core/Fab";
import swal from "sweetalert";

import { useHistory } from "react-router-dom";

import axiosInstance from "../util/axiosInstance";

const LoginConteiner = ({ setAuthen }) => {
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    const { username, password } = data;

    if (password) {
      const newUser = {
        username,
        password,
      };
      console.log(newUser);
      try {
        const response = await axiosInstance.post("/login", newUser);
        console.log(response);

        localStorage.setItem("Token", response.data.token);
        history.push("/main");
      } catch (error) {
        swal("Error", "Usuario o contraseña incorrecta.", "error");
      }
    }

    e.target.reset();
  };

  return (
    <Container className="form-login mt-2">
      <Form  onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center text-white">Iniciar Sesión</h3>

        <br></br>
        <Form.Control
          placeholder="Nombre"
          autoComplete="off"
          name="username"
          ref={register({
            required: {
              value: true,
              message: "Nombre es requerido. ",
            },
            maxLength: {
              value: 50,
              message: "No más de 50 carácteres!",
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors.username && errors.username.message}
        </span>

        <Form.Group>
          <Form.Control
            placeholder="password"
            type="password"
            name="password"
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
            {errors.password && errors.password.message}
          </span>
        </Form.Group>

        <Form.Group className="btn-redes mb-4">
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
        <Row className="d-flex justify-content-center mb-3">
          <Button id="BtnLogin" className="btn-lg btn-block btn-login-iniciar w-50 font-weight-bolder shadow" type="submit">
            INGRESAR
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginConteiner;
