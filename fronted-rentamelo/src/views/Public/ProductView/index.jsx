import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { ProductView } from 'components';


const ProductViewPage = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState([]);
    const [dataLessor, setDataLessor] = useState([]);

    const [datosRenta, setDatosRenta] = useState({
        renta: 0,
        tiempoRenta: 0,
        idProduct: 79
    });

    const obtenerInfoProducto = async () => {
        const res = await axios.get(`http://localhost:4006/productos/${idProduct}`);
        setProduct(res.data.data.producto);
        setDataLessor(res.data.data.infoUsuario);
    }

    const realizarRenta = async () => {
        const res = await axios.post(`http://localhost:4006/rentas/realizar-renta`, datosRenta);
    }
    useEffect(() => {
        obtenerInfoProducto();
    }, []);
    return (
        <ProductView product={product} dataLessor={dataLessor} mainImg={product.img1} />
    );
}

export default ProductViewPage;