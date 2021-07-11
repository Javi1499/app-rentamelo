import React, { useState, Fragment } from 'react'
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import { setToken, initAxiosIntterceptos } from '../helpers';
initAxiosIntterceptos();
const Login = ({ setEstaLogueado }) => {
   // const [estaRegistrado, setEstaRegistrado] = useState(true);
    const [error, setError] = useState({ error: false, mensaje: "" });
    const [datosLogin, setDatosLogin] = useState({
        email: "",
        password: ""
    });

    

    //Se actualiz el state con los datos ingresados 
    const actualizarState = e => {
        setDatosLogin({
            ...datosLogin,
            [e.target.name]: e.target.value
        })
    }

    const { email, password } = datosLogin;

    //Function para iniciar sesion
    const functionIniciarSesion = async (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === "") {
            setError({ error: true, mensaje: "Todos los campos son obligatorios" });
            return
        } else {
            const respuesta = await axios.post("http://localhost:4006/autenticacion/login", datosLogin);
            if (respuesta.data.status === 200) {
                setEstaLogueado(true);
                setToken(respuesta.data.token);
                // if (respuesta.data.data.rol === "admin") {
                //     localStorage.setItem('admin', true);
                //     setError({ error: false })
                // }
            } else {
                setError({ error: true, mensaje: respuesta.data.mensaje })
            }

        }
    }
    return (
        <Fragment >
            <Container>
                <div className="u-full-width">
                    <div className="two-half column">
                        <h2>INICIA SESIÓN</h2>
                        {error.error ? <p className="alerta-error">{error.mensaje}</p> : null}

                        <Form
                            onSubmit={functionIniciarSesion}
                        >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="canela@correo.com"
                                name="email"
                                onChange={actualizarState}
                                value={email}
                            />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="passwod"
                                placeholder="********"
                                name="password"
                                onChange={actualizarState}
                                value={password}
                            />
                            <Button
                                type="submit">
                                Iniciar SESIÓN
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default Login;