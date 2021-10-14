import React, { useState } from 'react';
import { Alert, CardRent } from 'components';
import { RentList, Rent, Wrapper, Title } from './styled'
import axios from 'axios';
const Component = ({ dataRents, viewAs }) => {
    const dataVerify = dataRents.length > 0;
    const [idRentSelected, setIdRentSelected] = useState(0);
    const [showAlert, setShowAlert] = useState(false)
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


    const showAlertConfirmation = idRent => {
        setIdRentSelected(idRent);
        console.log(idRentSelected)
        setShowAlert(true);
    }
    return (
        <Wrapper>
            <Title>{viewAs ? "Historial de rentas de tus productos" : "Historial de rentas realizadas"}</Title>
            {showAlert && <Alert information={`¿Ya tienes el producto?\ntu tiempo de renta comenzara ahora`} onClick={() => rentStart(idRentSelected)} setShowAlert={setShowAlert} />}
            <RentList>
                {dataVerify ? null : <div><h1>No has rentado ningun producto</h1> <a href="/">hazlo ahora</a></div>}

                {dataRents.map((rent, index) => {
                    const { name, description, img1, firstName, lastName, status, startDate, endDate, idRent, idStatus } = rent;
                    return (

                        <Rent key={`product-${rent.idProduct}-${index}`}>
                            <CardRent
                                dataProduct={
                                    {
                                        name,
                                        description,
                                        img1
                                    }
                                }
                                rentDetails={{
                                    status, startDate, endDate, idRent, idStatus
                                }}
                                dataLessor={{
                                    firstName,
                                    lastName,
                                    viewAs
                                }}
                                rentDays={rent.rentDays}
                                rentStart={() => showAlertConfirmation(rent.idRent)}
                            />
                        </Rent>)
                }
                ).reverse()}
            </RentList></Wrapper>
    );
}

export default Component;
export { Component as RentList }