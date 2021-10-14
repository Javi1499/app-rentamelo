import React, { useState, useEffect } from 'react';
import { RentList } from 'components';
import axios from 'axios';

const Component = () => {
    const [rents, setRents] = useState([])


    const getRents = async () => {
        const res = await axios.get(`http://localhost:4006/rentas/arrendatario`);
        setRents(res.data.data);
    }
    useEffect(() => {
        getRents();

    }, [])

    // const endRent = async()=>{
    //     const res = await axios.post(`http://localhost:4006/rentas/finalizar-renta/${idRent}`)
    // }

    return (
        <RentList dataRents={rents} viewAs={true} />
    );
}

export default Component;
export { Component as RentsLesser }
