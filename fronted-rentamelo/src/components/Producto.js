import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Producto = ({ producto }) => {
    return (
        <div>
            <Card style={{ width: '18rem', height: "40%", margin: '1rem' }}>
                <Card.Img variant="top" src={producto.uri_img_1} height="250px" />
                <Card.Body style={{ height: '40%' }}>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        {producto.descripcion}
                    </Card.Text>
                    <Button variant="warning" href={`producto/${producto.id_producto}`}>Ver detalles</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Producto;