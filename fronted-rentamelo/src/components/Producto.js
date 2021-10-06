import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import './Producto.css'
const url="http://localhost:3000"
const Producto = ({ producto }) => {
    const { uri_img_1, nombre, descripcion, id_producto, precio_dia, ubicacion } = producto;

    return (

        <div className="card">
            <img className="imgProducto" src={uri_img_1} />
            <h4>{nombre}</h4>
            <div className="descripcion">
                <LinesEllipsis
                className="pDescripcion"
                    text={descripcion}
                    maxLine='2'
                />
            </div>
            <p className="precio">${precio_dia} x dia</p>
            <p className="ubicacion">{ubicacion}</p>
            <button className="btnDetalles" onClick={()=> window.location.href=`${url}/producto/${id_producto}`} >Ver detalles</button>
        </div>

    );
}

export default Producto;