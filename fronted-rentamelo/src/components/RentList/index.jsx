import React from 'react';
import { CardRent } from 'components';
import { RentList, Rent, Wrapper } from './styled'
import axios from 'axios';
const Component = ({ dataRents }) => {
    const dataVerify = dataRents.length > 0;

    const rentStart = async idRent => {
        const res = await axios.post(`http://localhost:4006/rentas/confirmar-recepcion/${idRent}`)

        if (res.status == 200) {
            console.log(res)
            alert(`${res.data.mensaje}`)
            window.location.reload()
        }
    }
    return (
        <Wrapper>
            <RentList>
                {dataVerify ? null : <div><h1>No has rentado ningun producto</h1> <a href="/">hazlo ahora</a></div>}

                {dataRents.map((rent, index) => {
                    const { name, descrption, img1, firstName, lastName, status, startDate, endDate } = rent;
                    // const dataProduct = 
                    // const dataLessor = 
                    //     const rentDetails = {
                    //         status, startDate, endDate
                    //     }

                    return (

                        <Rent key={`product-${rent.idProduct}-${index}`}>
                            <CardRent
                                dataProduct={
                                    {
                                        name,
                                        descrption,
                                        img1
                                    }
                                }
                                rentDetails={{
                                    status, startDate, endDate
                                }}
                                dataLessor={{
                                    firstName,
                                    lastName
                                }}
                                rentDays={rent.rentDays}
                                rentStart={() => rentStart(rent.idRent)}
                            />
                        </Rent>)
                }
                )}
            </RentList></Wrapper>
    );
}

export default Component;
export { Component as RentList }