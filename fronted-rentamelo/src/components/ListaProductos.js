import React, { useState, useEffect } from 'react';
import Producto from './Producto'
import MiProducto from './MiProducto'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
const ListaProductos = () => {
    const { condicion } = useParams();
    console.log(condicion);
    const [cambio, setCambio] = useState(false);
    const [infoProductos, setInfoProductos] = useState([])
    //Se obtiene los productos
    const obtenerInfo = async () => {
        if (condicion === "true") {
            const productos = await axios.post("http://localhost:4006/productos/tus-productos");
            setInfoProductos(productos.data.data);
            return;
        }
        const productos = await axios.get("http://localhost:4006/productos");
        setInfoProductos(productos.data.data);
    }

    useEffect(() => {
        obtenerInfo()
    }, [cambio])
    if(condicion==="true"){
        return (
            <Container>
                {infoProductos.length !== 0 ? <h1>Esto son tus productos </h1> : <div><h1>No has publicado ningun producto</h1> <a href="/agregar-producto">hazlo ahora</a></div>}
                <Row className="justify-content-center">
                    {infoProductos.map(producto =>
                        <Col key={producto.id_producto}>
                            <MiProducto
                                producto={producto}
                                setCambio={setCambio}
                                cambio={cambio}
                            />
                        </Col>
                    )}
                </Row>
    
            </Container>
        );
    }
    return (
        <Container>
            {infoProductos.length !== 0 ? null: <h1>No hay productos disponibles</h1>}
            <Row className="justify-content-center">
                {infoProductos.map(producto =>
                    <Col key={producto.id_producto}>
                        <Producto
                            producto={producto}
                        />
                    </Col>
                )}
            </Row>

        </Container>
    );
}

export default ListaProductos;