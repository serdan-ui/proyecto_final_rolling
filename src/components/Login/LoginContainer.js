import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
const LoginConteiner = () => {

  const { register, errors, handleSubmit } = useForm();


    return ( <Form className="form-login">
        <h3 className="text-center text-white">Iniciar sesion</h3>
        <Form.Group>
          <Form.Label>Ingrese su nombre de usuario</Form.Label>
          <Form.Control
           placeholder= "username"
           ref={
            register({
                required: {
                    value: true,
                    message: 'Usuario es requerido. '
                },
                maxLength: {
                    value: 20,
                    message: 'No más de 20 carácteres!'
                },
                minLength: {
                    value: 5,
                    message: ' Usuario con mínimo 5 carácteres. '
                }
            })}
          />
        </Form.Group>
        <Form.Group>
        <Form.Label>Ingrese su contraseña</Form.Label>
          <Form.Control 
          type = "password"
           placeholder= "password"
           />
        </Form.Group>
        <Button variants="primary" type="submit">Enviar</Button>
      </Form> );
}
 
export default LoginConteiner;