import React, { useState} from 'react';
import axios from 'axios';
import UploadIMG from './UploadIMG'
import { Button, Form, Col } from 'react-bootstrap';
const Formulario = () => {
    const [datosProducto, setDatosProducto] = useState({
        nombre: "",
        descripcion: "",
        precio_hora: 0,
        precio_dia: 0,
        id_tiempo_entrega: 0,
        id_ubicacion: 0,
        file:null
    });
    const [error, setError] = useState({ error: false, mensaje: "" });

   
    const actualizarStateImg = e => {

        setDatosProducto({
            ...datosProducto,
            [e.target.name]: e.target.files[0]
        })

    }
    const actualizarState = e => {

        setDatosProducto({
            ...datosProducto,
            [e.target.name]: e.target.value
        })

    }
    
    //Funcion para crear nuevo producto
    const submitProduct = async e => {
        e.preventDefault()
        if (nombre.trim() === "" || descripcion === "" || id_tiempo_entrega === 0 || id_ubicacion === 0||file==null) {
            setError({ error: true, mensaje: "Ingresa los datos necesarios para tyu producto" })
            return;
        }
 const data = new FormData();
 data.append("file", file)
 data.append('nombre',nombre)
 data.append('descripcion',descripcion)
 data.append('id_tiempo_entrega',id_tiempo_entrega)
 data.append('id_ubicacion',id_ubicacion)
 data.append('precio_dia',precio_dia)
 data.append('precio_hora',precio_hora)


        console.log(data);
        const respuesta = await axios.post("http://localhost:4006/productos/nuevo-producto", data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});
        if (respuesta.data.status === 200) {
            // if (respuesta.data.data.rol === "admin") {
            //     localStorage.setItem('admin', true);
            //     setError({ error: false })
            // }
        } else {
            setError({ error: true, mensaje: respuesta.data.mensaje })
        }
     }


    const { nombre, descripcion, precio_hora, precio_dia, id_tiempo_entrega, id_ubicacion, file } = datosProducto
    return (

        <Col className="col-8">
            <h1>Agrega los datos de tu producto</h1>
            {error.error ? <p className="alerta-error">{error.mensaje}</p> : null}
            <Form onSubmit={submitProduct}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Bocina bluetooth"
                        value={nombre}
                        onChange={actualizarState} />
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="descripcion"
                        placeholder="!5 pulgadas marca steren"
                        value={descripcion}
                        onChange={actualizarState}
                    />
                    <Form.Label>Precio por hora</Form.Label>
                    <Form.Control
                        type="number"
                        name="precio_hora"
                        placeholder="$40"
                        value={precio_hora}
                        onChange={actualizarState}
                    />
                    <Form.Label>Precio por dia</Form.Label>
                    <Form.Control
                        type="number"
                        name="precio_dia"
                        placeholder="$150"
                        value={precio_dia}
                        onChange={actualizarState}
                    />
                    <Form.Label>En cuanto tiempo puedes entregar el producto</Form.Label>
                    <Form.Control
                        as="select"
                        name="id_tiempo_entrega"
                        value={id_tiempo_entrega}
                        onChange={actualizarState}
                    >
                        <option>---Selecciona---</option>
                        <option value={1}>Menos de 30min</option>
                        <option value={2}>Entre 30-60min</option>
                        <option value={3}>Mas de 60min</option>
                    </Form.Control>
                    <Form.Label>En donde tienes el producto</Form.Label>
                    <Form.Control
                        as="select"
                        name="id_ubicacion"
                        value={id_ubicacion}
                        onChange={actualizarState}
                    >
                        <option>---Selecciona---</option>
                        <option value={1}>Armeria</option>
                        <option value={2}>Colima</option>
                        <option value={3}>Comala</option>
                        <option value={4}>Coquimatlán</option>
                        <option value={5}>Cuauhtémoc</option>
                        <option value={6}>Ixtlahuacán</option>
                        <option value={7}>Manzanillo</option>
                        <option value={8}>Minatitlán</option>
                        <option value={9}>Tecomán</option>
                        <option value={10}>Villa de Álvarez</option>
                    </Form.Control>

                    <UploadIMG
                        actualizarStateImg={actualizarStateImg}
                    />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>

    );
}

export default Formulario;