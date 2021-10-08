import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ProductoView.css'
import axios from 'axios'

const ProductoView = () => {
    const { idProduct } = useParams();
    const [producto, setProducto] = useState([]);
    const [usuarioPropietario, setUsuarioPropietario] = useState([]);
    const [mainImg, setMainImg] = useState('');
    const [datosRenta, setDatosRenta] = useState({
        renta: 0,
        tiempoRenta: 0,
        idProduct: 79
    });

    console.log(idProduct)
    const obtenerInfoProducto = async () => {
        const res = await axios.get(`http://localhost:4006/productos/${idProduct}`);
        console.log(res.data.data[0])
        setProducto(res.data.data.producto);
        setMainImg(res.data.data.producto.img1);
        console.log(producto)
        setUsuarioPropietario(res.data.data.infoUsuario);
    }

    const realizarRenta = async () => {
        const res = await axios.post(`http://localhost:4006/rentas/realizar-renta`, datosRenta);
    }
    useEffect(() => {
        obtenerInfoProducto();
    }, []);
    console.log(producto)
    const { firstName, lastName } = usuarioPropietario;
    const { name, description, price, deliveryTime, location, img1, img2, img3 } = producto;
    return (
        <div className="vistaProducto" >

            <img className="mainImg" src={mainImg} />

            <div className="informacionP">
                <h1 className="titulo">{name}</h1>
                <h5>Descripcion</h5>
                <p>{description}</p>
            </div>
            <div className="infoRenta">
                <h5>Precio de renta</h5>
                <p className="precio">${price} x dia</p>
            </div>
            <div className="divisor"></div>
            <div className="infoEntrega">
                <div>
                    <h5>Ubicación</h5>
                    <p>{location}</p>
                </div>
                <div>
                    <h5>Datos de entrega</h5>
                    <p>Tiempo de entrega: {deliveryTime}</p>
                </div>

            </div>
            <div className="tiempoRenta">
                <label>¿Por cuántos días deseas rentar el producto?</label><br />
                <input type="number" name="tiempoRenta" onChange={e => { setDatosRenta({ ...datosRenta, [e.target.name]: e.target.value }) }} />
                <label>Dia(s)</label>

            </div>

            <div className="btnRentar">
                <button onClick={() => realizarRenta()}>RENTAR PRODUCTO</button>
            </div>
            <div className="imgPrevisuales">
                <img className="imgSecundaria" src={img1} onClick={() => { setMainImg(img1) }} />
                <img className="imgSecundaria" src={img2} onClick={() => { setMainImg(img2) }} />
                <img className="imgSecundaria" src={img3} height="100%" onClick={() => { setMainImg(img3) }} />
            </div>
            <div className="infoArrendador">
                <h4>Datos de arrendador</h4>
                <p>Nombre: {firstName} {lastName}</p>
            </div>
        </div>


    );
}

export default ProductoView;