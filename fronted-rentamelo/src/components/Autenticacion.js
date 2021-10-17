import React, { useState } from 'react';
import SignUp from 'components'
import Login from 'components'
import { Row } from 'react-bootstrap';
const Autenticacion = () => {
    const [estaRegistrado, setEstaRegistrado] = useState(true);
    return (
        <Row>
            {estaRegistrado ?
                <Login
                    setEstaRegistrado={setEstaRegistrado}
                />
                :
                <SignUp
                    setEstaRegistrado={setEstaRegistrado}
                />
            }
        </Row>

    );
}

export default Autenticacion;