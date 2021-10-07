import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from 'components/Layout';
import { ProductList, Filter } from 'components';

const MyProducts = () => {
    //  const { condicion } = useParams();
    // console.log(condicion);
    const [change, setChange] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [filterValue, setFilterValue] = useState(0);
    const obtenerInfo = async () => {

        if (filterValue != 0) {
            const productos = await axios.post(`http://localhost:4006/productos/filtro/${filterValue}`);
            setProductsData(productos.data.data);
            return;
        }
        const productos = await axios.post("http://localhost:4006/productos/tus-productos");
        setProductsData(productos.data.data);
        return;
    }

    useEffect(() => {
        obtenerInfo()
    }, [change, filterValue])

    return (
        <Container>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
            <ProductList productsData={productsData} change={change} setChange={setChange} />
        </Container>
    )
}


export default MyProducts;