import React, { useState, Fragment } from 'react'
import axios from 'axios';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { setToken, initAxiosIntterceptos } from '../helpers';
initAxiosIntterceptos();
const SingUp = () => {
    const [error, setError] = useState({ error: false, mensaje: "" });
    const [datosRegistro, setDatosRegistro] = useState({

        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        telefono: "",
        fecha_nacimiento: "",
        email: "",
        password: ""
    });
    //Se actualiz el state con los datos ingresados 
    const actualizarState = e => {
        setDatosRegistro({
            ...datosRegistro,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, apellido_paterno, apellido_materno, telefono, fecha_nacimiento, email, password } = datosRegistro;

    //Function para iniciar sesion
    const functionIniciarSesion = async (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === "") {
            setError({ error: true, mensaje: "Todos los campos son obligatorios" });
            return
        } else {
            const respuesta = await axios.post("http://localhost:4006/autenticacion/registro", datosRegistro);
            if (respuesta.data.status === 200) {
                setToken(respuesta.data.token);
                window.location.href='/'
                
               
            } else {
                setError({ error: true, mensaje: respuesta.data.mensaje })
            }

        }
    }
    return (
        <Fragment >
            <Container>
                <Row className="justify-content-center">
                    <Col className=" col-6">
                        <h2>Registrate</h2>
                        {error.error ? <p className="alerta-error">{error.mensaje}</p> : null}

                        <Form
                            onSubmit={functionIniciarSesion}
                        >
                            <Form.Label>Nombre(s)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej. Juan"
                                name="nombre"
                                onChange={actualizarState}
                                value={nombre}
                                required
                            />
                            <Form.Label>A. Paterno</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej. Perez"
                                name="apellido_paterno"
                                onChange={actualizarState}
                                value={apellido_paterno}
                            />
                            <Form.Label>A. Materno</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej. Perez"
                                name="apellido_materno"
                                onChange={actualizarState}
                                value={apellido_materno}
                            />
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                required
                                type="tel"
                                placeholder="Ej. 3131456784"
                                name="telefono"
                                onChange={actualizarState}
                                value={telefono}
                            />
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                name="fecha_nacimiento"
                                onChange={actualizarState}
                                value={fecha_nacimiento}
                            />
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="canela@correo.com"
                                name="email"
                                onChange={actualizarState}
                                value={email}
                            />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="********"
                                name="password"
                                onChange={actualizarState}
                                value={password}
                            />
                            <Button className="mt-2"
                                type="submit">
                                Registrarse
                            </Button>
                        </Form>
                        <Col>Ya tienes cuenta? <a href="/login">Inicia sesion</a></Col>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

}
export default SingUp;