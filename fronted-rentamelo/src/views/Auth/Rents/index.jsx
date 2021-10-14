import React, { useState, useEffect } from 'react';
import { RentList } from 'components';
import axios from 'axios';

const Component = () => {
    const [rents, setRents] = useState([])
    const [idRentSelected, setIdRentSelected] = useState(0);
    const [showAlert, setShowAlert] = useState(false)
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
            console.log(res)
            alert(`${res.data.mensaje}`)
            window.location.reload()
        }
    }
    return (
        <RentList dataRents={rents} viewAs={false}
            idRentSelected={idRentSelected}
            setIdRentSelected={setIdRentSelected}
            onClick={() => rentStart(idRentSelected)}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            alertMessage={alertMessage}
        />
    );
}

export default Component;
export { Component as Rents }