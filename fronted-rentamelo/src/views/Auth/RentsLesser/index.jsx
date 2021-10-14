import React, { useState, useEffect } from 'react';
import { RentList } from 'components';
import axios from 'axios';

const Component = () => {
    const [rents, setRents] = useState([])
    const [idRentSelected, setIdRentSelected] = useState(0);
    const [showAlert, setShowAlert] = useState(false)
    const alertMessage = `¿Confirmas que haz recibido el producto de regreso correctamente?`;
    const getRents = async () => {
        const res = await axios.get(`http://localhost:4006/rentas/arrendador`);
        setRents(res.data.data);
    }
    useEffect(() => {
        getRents();

    }, [])

    const rentEnd = async idRent => {
        console.log("Me clickeo")
        setShowAlert(false);
        const res = await axios.post(`http://localhost:4006/rentas/finalizar-renta/${idRent}`)

        if (res.status == 200) {
            console.log(res)
            alert(`${res.data.mensaje}`)
            window.location.reload()
        }
    }

    return (
        <RentList
            dataRents={rents} viewAs={true}
            idRentSelected={idRentSelected}
            setIdRentSelected={setIdRentSelected}
            onClick={() => rentEnd(idRentSelected)}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            alertMessage={alertMessage}
        />
    );
}

export default Component;
export { Component as RentsLesser }
