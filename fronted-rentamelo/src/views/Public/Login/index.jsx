import axios from 'axios';
import { Login } from 'components';
import React, { useState } from 'react';
import { setToken, initAxiosIntterceptos } from 'helpers';
import { Header, Text } from './styled'
initAxiosIntterceptos();
const Component = () => {
    const [showAlert, setShowAlert] = useState({ status: false, message: '' })
    const onSubmit = async (data, e) => {

        const res = await axios.post('http://localhost:4006/autenticacion/login', data);
        console.log(res)
        if (res.data.status === 400) {
            console.log(res.status, res.data.mensaje)
            return setShowAlert({ status: true, message: res.data.mensaje })
        }
        setToken(res.data.token);
        setTimeout(() => {
            e.target.reset()
            return window.location.href = "/"
        }, 1000);
    }

    return (
        <>
            <Header>Inicio de sesión</Header>
            <Login onSubmit={onSubmit} showAlert={showAlert} setShowAlert={setShowAlert} />
            <Text>¿No tienes cuenta? <a href="/signup">Registrate aquí</a></Text>
        </>
    );
}

export default Component;
export { Component as LoginPage }