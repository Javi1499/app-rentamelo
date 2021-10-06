import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from 'components/Layout';
import { ProductList, Filter } from 'components';

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

    return (
        <Container>
            <ProductList productsData={productsData} change={change} setChange={setChange} />
        </Container>
    )
}


export default Home;