import React, { useState, useEffect } from 'react';
import { RentList, Alert } from 'components';
import axios from 'axios';

const Component = () => {
    const [rents, setRents] = useState([])
    const [idRentSelected, setIdRentSelected] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState({
        status: false,
        message: ''
    })
    const alertMessage = `¿Confirmas que haz recibido el producto de regreso correctamente?`;
    const getRents = async () => {
        const res = await axios.get(`http://localhost:4006/rentas/arrendador`);
        console.log(res.data.data)
        setRents(res.data.data);
    }
    useEffect(() => {
        getRents();

    }, [])

    const rentEnd = async idRent => {

        setShowAlert(false);
        const res = await axios.post(`http://localhost:4006/rentas/finalizar-renta/${idRent}`)

        if (res.status === 200) {
            setShowAlert2({ message: res.data.mensaje, status: true })

            setTimeout(() => window.location.reload(), 4000)
        }
    }

    return (
        <>
            {showAlert2.status && <Alert information={showAlert2.message} onClick={() => setShowAlert2({ ...showAlert2, status: false })} setShowAlert={() => setShowAlert2({ ...showAlert2, status: false })} />}
            <RentList
                dataRents={rents} viewAs={true}
                idRentSelected={idRentSelected}
                setIdRentSelected={setIdRentSelected}
                onClick={() => rentEnd(idRentSelected)}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                alertMessage={alertMessage}
            />
        </>
    );
}

export default Component;
export { Component as RentsLesser }
