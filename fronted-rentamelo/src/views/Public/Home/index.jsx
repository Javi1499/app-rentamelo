import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from 'components/Layout';
import { ProductList, Filter, Carousel } from 'components';

const Home = () => {
    //  const { condicion } = useParams();
    // console.log(condicion);
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
        "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(1).png",
        "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(2).png",
        "https://rentamelo.s3.us-east-2.amazonaws.com/image+8.png",
        "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(1).png",
        "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(2).png",
    ]

    return (
        <Container>
            <Carousel images={images} imageToShow={1} />
            <ProductList productsData={productsData} change={change} setChange={setChange} />
        </Container>
    )
}


export default Home;