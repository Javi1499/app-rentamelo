import React, { useState, useEffect } from 'react';
import Producto from './Producto'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
const ListaProductos = () => {

    const [infoProductos, setInfoProductos] = useState([])
    //Se obtiene los productos
    const obtenerInfo = async()=>{
        const productos = await axios.get("http://localhost:4006/productos");
        setInfoProductos(productos.data.data);
    }
 
    useEffect(() => {
    obtenerInfo()
      
    }, [])
    return (
        <Container>
           {infoProductos.length!==0 ?<h1>Esto son los productos disponibles</h1> : <h1>No hay productos disponibles</h1>} 
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