import React, {useState} from 'react';
import SignUp from './SignUp'
import Login from './Login'
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