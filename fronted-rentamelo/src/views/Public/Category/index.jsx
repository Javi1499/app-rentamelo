import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from 'components/Layout';
import { ProductList, CategoriesList } from 'components';
import { useParams } from 'react-router';

const ProductsByCategory = () => {
    const { idCategory } = useParams()
    const [change, setChange] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const obtenerInfo = async () => {
        let productos = await axios.get("http://localhost:4006/productos");
        productos = productos.data.data
        const productosByCategory = productos.filter(product => product.idCategory == idCategory);
        setProductsData(productosByCategory);
        return;
    }

    useEffect(() => {
        obtenerInfo()
    }, [change])

    return (
        <Container>
            <CategoriesList />
            <ProductList productsData={productsData} change={change} setChange={setChange} />
        </Container>
    )
}


export default ProductsByCategory;