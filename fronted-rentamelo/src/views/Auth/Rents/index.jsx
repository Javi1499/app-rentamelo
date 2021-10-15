import React, { useState, useEffect } from 'react';
import { RentList, Alert } from 'components';
import axios from 'axios';

const Component = () => {
    const [rents, setRents] = useState([])
    const [idRentSelected, setIdRentSelected] = useState(0);
    const [showAlert, setShowAlert] = useState(false)
    const [showAlert2, setShowAlert2] = useState({
        status: false,
        message: ''
    })
    const alertMessage = `¿Ya tienes el producto?\ntu tiempo de renta comenzara ahora`;



    const getRents = async () => {
        const res = await axios.get(`http://localhost:4006/rentas/arrendatario`);
        setRents(res.data.data);
    }
    useEffect(() => {
        getRents();

    }, [])

    const rentStart = async idRent => {
        console.log("Me clickeo")
        setShowAlert(false);
        const res = await axios.post(`http://localhost:4006/rentas/confirmar-recepcion/${idRent}`)

        if (res.status == 200) {
            setShowAlert2({ message: res.data.mensaje, status: true })

            setTimeout(() => window.location.reload(), 4000)

        }
    }
    return (
        <>
            {showAlert2.status && <Alert information={showAlert2.message} onClick={() => setShowAlert2({ ...showAlert2, status: false })} setShowAlert={() => setShowAlert2({ ...showAlert2, status: false })} />}
            <RentList dataRents={rents} viewAs={false}
                idRentSelected={idRentSelected}
                setIdRentSelected={setIdRentSelected}
                onClick={() => rentStart(idRentSelected)}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                alertMessage={alertMessage}
            />
        </>
    );
}

export default Component;
export { Component as Rents }