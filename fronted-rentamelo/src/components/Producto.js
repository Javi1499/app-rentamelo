import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Producto = ({producto}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.uri_img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        {producto.descripcion}
                    </Card.Text>
                    <Button variant="warning">Ver detalles</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Producto;