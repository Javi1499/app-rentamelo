import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ProductoView.css'
import axios from 'axios'

const ProductoView = () => {
    const { id_producto } = useParams();
    const [producto, setProducto] = useState([]);
    const [usuarioPropietario, setUsuarioPropietario] = useState([]);
    const [mainImg, setMainImg] = useState('');
    const [datosRenta, setDatosRenta] = useState({
        renta: 0,
        tiempoRenta: 0,
        id_producto: 79
    });

    console.log(id_producto)
    const obtenerInfoProducto = async () => {
        const res = await axios.get(`http://localhost:4006/productos/${id_producto}`);
        console.log(res.data.data[0])
        setProducto(res.data.data.producto);
        setMainImg(res.data.data.producto.uri_img_1);
        console.log(producto)
        setUsuarioPropietario(res.data.data.infoUsuario);
    }

    const realizarRenta = async () => {
        const res = await axios.post(`http://localhost:4006/rentas/realizar-renta`, datosRenta);
    }
    useEffect(() => {
        obtenerInfoProducto();
    }, []);

    const { apellido_paterno } = usuarioPropietario;
    const { nombre, descripcion, precio_dia, precio_hora, tiempo_entrega, ubicacion, uri_img_1, uri_img_2, uri_img_3 } = producto;
    return (
        <div className="vistaProducto" >

            <img className="mainImg" src={mainImg} />

            <div className="informacionP">
                <h1 className="titulo">{nombre}</h1>
                <h5>Descripcion</h5>
                <p>{descripcion}</p>
            </div>
            <div className="infoRenta">
                <h5>Precio de renta</h5>
                <p className="precio">${precio_dia} x dia</p>
                <p className="precio">${precio_hora} x hora</p>
            </div>
            <div className="divisor"></div>
            <div className="infoEntrega">
                <div>
                    <h5>Ubicacion</h5>
                    <p>{ubicacion}</p>
                </div>
                <div>
                    <h5>Datos de entrega</h5>
                    <p>Tiempo de entrega: {tiempo_entrega}</p>
                </div>

            </div>
            <div className="tiempoRenta">
                <label>Por cuabto tiempo deseas rentar el producto?</label><br />
                <input type="number" name="tiempoRenta" onChange={e => { setDatosRenta({ ...datosRenta, [e.target.name]: e.target.value }) }} />
                <label>Dia(s)</label>
                <input type="radio" name="renta" value={0} onChange={e => { setDatosRenta({ ...datosRenta, [e.target.name]: e.target.value }) }} />
                <label>Hora(s)</label>
                <input type="radio" name="renta" value={1} onChange={e => { setDatosRenta({ ...datosRenta, [e.target.name]: e.target.value }) }} />

            </div>

            <div className="btnRentar">
                <button onClick={()=>realizarRenta()}>RENTAR PRODUCTO</button>
            </div>
            <div className="imgPrevisuales">
                <img className="imgSecundaria" src={uri_img_1} onClick={() => { setMainImg(uri_img_1) }} />
                <img className="imgSecundaria" src={uri_img_2} onClick={() => { setMainImg(uri_img_2) }} />
                <img className="imgSecundaria" src={uri_img_3} height="100%" onClick={() => { setMainImg(uri_img_3) }} />
            </div>
            <div className="infoArrendador">
                <h4>Datos de arrendador</h4>
                <p>Nombre: {usuarioPropietario.nombre} {apellido_paterno}</p>
            </div>
        </div>


    );
}

export default ProductoView;