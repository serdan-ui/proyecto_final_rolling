import React from 'react';
import { Form, Button } from 'react-bootstrap';
const LoginConteiner = () => {
    return ( <Form>
        <Form.Group>
          <Form.Label>Ingrese su nombre de usuario</Form.Label>
          <Form.Control placeholder= "username"/>
        </Form.Group>
        <Form.Group>
        <Form.Label>Ingrese su contraseña</Form.Label>
          <Form.Control type = "password" placeholder= "password"/>
        </Form.Group>
        <Button variants="primary" type="submit">Enviar</Button>
      </Form> );
}
 
export default LoginConteiner;