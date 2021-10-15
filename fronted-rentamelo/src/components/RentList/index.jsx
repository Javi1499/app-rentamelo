import React, { useState } from 'react';
import { Alert, CardRent } from 'components';
import { RentList, Rent, Wrapper, Title } from './styled'
import axios from 'axios';
const Component = ({ dataRents, viewAs, idRentSelected, setIdRentSelected, onClick, showAlert, setShowAlert, alertMessage }) => {
    const dataVerify = dataRents.length > 0;


    const showAlertConfirmation = idRent => {
        setIdRentSelected(idRent);
        console.log(idRentSelected)
        setShowAlert(true);
    }
    return (
        <Wrapper>
            <Title>{viewAs ? "Historial de rentas de tus productos" : "Historial de rentas realizadas"}</Title>
            {showAlert && <Alert information={alertMessage} onClick={onClick} setShowAlert={setShowAlert} buttonIsRequired />}
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