import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from 'components/Layout';
import carrousel from "assets/carrousel/carrusel.png"
import carrousel2 from "assets/carrousel/carrusel2.png"
import carrousel3 from "assets/carrousel/carrusel3.png"
import { ProductList, Carousel, CategoriesList } from 'components';

const Home = () => {
    const [change, setChange] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const obtenerInfo = async () => {
        const productos = await axios.get("http://localhost:4006/productos");
        setProductsData(productos.data.data);
        return;
    }

    useEffect(() => {
        obtenerInfo()
    }, [change])

    const images = [
        carrousel,
        carrousel2,
        carrousel3
    ]

    return (
        <Container>
            <Carousel images={images} imageToShow={1} />
            <CategoriesList />
            <ProductList productsData={productsData} change={change} setChange={setChange} />
        </Container>
    )
}


export default Home;