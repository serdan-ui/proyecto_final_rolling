import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
const LoginConteiner = () => {

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data)

    e.target.reset();
}


    return (
       <Container className="form-login" >
       <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center text-white">Iniciar sesion</h3>
        <Form.Group>
          <Form.Label>Ingrese su nombre de usuario</Form.Label>
          <Form.Control
           placeholder= "username"
           name="usuario"
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
           <span className="text-danger text-small d-block mb-2">
                            {errors.usuario && errors.usuario.message}
                        </span>
        </Form.Group>
        <Form.Group>
        <Form.Label>Ingrese su contraseña</Form.Label>
          <Form.Control 
          type = "password"
           placeholder= "password"
           name="Password"
          
            ref={
                         register({
                                    required: {
                                        value: true,
                                        message: 'Contraseña es requerido. '
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'No más de 20 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: ' Contraseña con mínimo 5 carácteres. '
                                    },
                                    
                                })}
                                />
                                
            <span className="text-danger text-small d-block mb-2">
                            {errors.Password && errors.Password.message}
                        </span>
        </Form.Group>
        <Button variants="primary" type="submit">Enviar</Button>
      </Form> 
      </Container>);
}
 
export default LoginConteiner;