import axios from 'axios';
import { SignUp } from 'components';
import React, { useState } from 'react';
import { Header } from './styled';
const Component = () => {
    const [showAlert, setShowAlert] = useState({ status: false, message: '' })
    const onSubmit = async (data, e) => {

        if (data.password === data.passwordValidate) {

            const res = await axios.post('http://localhost:4006/autenticacion/registro', data);
            if (res.data.status === 400) {
                console.log(res.status, res.data.mensaje)
                return setShowAlert({ status: true, message: res.data.mensaje })
            }
            e.target.reset()
            return
        }

        return setShowAlert({ status: true, message: "Las contraseñas no coinciden" })
    }
    return (
        <>
            <Header>Registrate</Header>
            <SignUp onSubmit={onSubmit} showAlert={showAlert} setShowAlert={setShowAlert} />
        </>
    );
}

export default Component;
export { Component as SignUpPage }