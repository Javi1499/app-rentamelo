import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { ProductView } from 'components';


const ProductViewPage = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState([]);
    const [dataLessor, setDataLessor] = useState([]);


    const obtenerInfoProducto = async () => {
        const res = await axios.get(`http://localhost:4006/productos/${idProduct}`);
        setProduct(res.data.data.producto);
        setDataLessor(res.data.data.infoUsuario);
    }


    useEffect(() => {
        obtenerInfoProducto();
    }, []);
    return (
        <ProductView product={product} dataLessor={dataLessor} mainImg={product.img1} />
    );
}

export default ProductViewPage;