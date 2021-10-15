import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { RentDetails } from "components";
import axios from 'axios';

const Component = () => {
    const { idProduct } = useParams();
    const { rentDetails } = useParams();
    const [product, setProduct] = useState([]);
    const [dataLessor, setDataLessor] = useState([]);
    const [rentData, setRentData] = useState({

        idProduct: 0,
        rentDays: null
    });

    const obtenerInfoProducto = async () => {
        const res = await axios.get(`http://localhost:4006/productos/${idProduct}`);
        setProduct(res.data.data.producto);
        setDataLessor(res.data.data.infoUsuario);
    }
    useEffect(() => {
        obtenerInfoProducto();
        setRentData({ ...setRentData, rentDays: rentDetails, idProduct: idProduct })
    }, [])

    const realizarRenta = async () => {
        const res = await axios.post(`http://localhost:4006/rentas/realizar-renta`, rentData);
        if (res.status === 200) {
            window.location.href = "/rentas"
        } else {
            alert("No puedes rentar un producto tuyo")
        }
    }
    return (
        <RentDetails dataProduct={product} dataLessor={dataLessor} rentDetails={rentDetails} onClick={() => realizarRenta()} />
    );
}

export default Component;
export { Component as RentDetailsPage }