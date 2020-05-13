import React from 'react';
import { Container, Button, Form, Row, Col,} from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import {FaFacebookSquare, FaGoogle} from 'react-icons/fa'
const FormRegister = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)

        e.target.reset();
    }


    return (


        <Container className="container_registro">
            <Form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="container_titulo">Registro</h3>
                <Form.Group as={Row}>
                    <Col >

                        <TextField
                            id="standard-basic"
                            label="Nombre"
                            className="form-control"
                            autoComplete="off"
                            name="usuario"
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Nombre es requerido. '
                                    },
                                    maxLength: {
                                        value: 5,
                                        message: 'No más de 5 carácteres!'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Mínimo 2 carácteres'
                                    }
                                })}
                        />
                    </Col>

                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Col>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            autoComplete="off"
                            className="form-control"
                            type="email"
                            name="Email"
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Email es requerido. '
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: 'No más de 40 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Col >
                        <TextField
                            id="standard-basic"
                            label="Contraseña"
                            type="password"
                            className="form-control"
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
                                    }
                                })}

                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Col>
                    <Button variant="outline-primary" size="sm" className="btn-redes"><FaFacebookSquare/>Ingresa con Facebook</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger" size="sm" className="btn-redes"><FaGoogle/>Ingresa con Gmail</Button>
                    </Col>
                </Form.Group>
                <Form.Group >
                    <Col>

                        <Button type="submit" className="btn-lg btn-dark btn-block">
                            Enviar
                         </Button>

                        <span className="text-danger text-small d-block mb-2">
                            {errors.usuario && errors.usuario.message}
                            {errors.Password && errors.Password.message}
                            {errors.Email && errors.Email.message}
                        </span>
                    </Col>
                </Form.Group>




            </Form>
        </Container>);

}

export default FormRegister;