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

    return (
        <RentList dataRents={rents} />
    );
}

export default Component;
export { Component as Rents }