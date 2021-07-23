import React from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios'
const MiProducto = ({producto, cambio, setCambio}) => {
    const pausarPublicacion = async ()=>{
        await axios.post(`http://localhost:4006/productos/pausar-publicacion/${producto.id_producto}`);
        setCambio(!cambio);
            return;
    }
    const reanudarPublicacion = async ()=>{
        await axios.post(`http://localhost:4006/productos/reanudar-publicacion/${producto.id_producto}`);
        setCambio(!cambio);
            return;
    }
    const eliminarPublicacion = async ()=>{
        await axios.post(`http://localhost:4006/productos/eliminar-publicacion/${producto.id_producto}`);
        setCambio(!cambio);
            return;
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.uri_img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        {producto.descripcion}
                    </Card.Text>
                    <Button className="mb-2" variant="warning" href={`/producto/${producto.id_producto}`}>Ver publicacion</Button>
                    {producto.id_estatus===1?<Button variant="secondary" onClick={()=>pausarPublicacion()} >Pausar publicacion</Button>
                    :
                    <Button variant="info" onClick={()=>reanudarPublicacion()} >Reanudar publicacion</Button>    
                }
                <Button className="mt-2" variant="danger" onClick={()=>eliminarPublicacion()} >Eliminar publicacion</Button> 
                </Card.Body>
            </Card>
        </div>
    );
}

export default MiProducto;