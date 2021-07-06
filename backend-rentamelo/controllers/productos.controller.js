const pool = require("../models/connection");

const controladorProductos = {
    agregarProducto: async (req, res) => {
        const { nombre, descripcion, precio_hora, precio_dia, id_tiempo_entrega, id_ubicacion, id_usuario } = req.body;
        const nuevoProducto = {
            nombre,
            descripcion,
            precio_hora,
            precio_dia,
            id_tiempo_entrega,
            id_ubicacion,
            id_usuario,
            id_estatus: 1
        }
        try {
            pool.query("INSERT INTO productos set ?", [nuevoProducto])
            res.status(200).json({ mensaje: "Tu producto fue publicado correctamente", data: [] })
        } catch (error) {
            res.status(400).json({ mensaje: "Hubo un error al publicar tu producto", data: [] })
        }
    },
    obtenerProductos: async (req, res) => {
        try {
            const data = await pool.query(`SELECT id_producto,nombre, precio_hora, precio_dia, productos.descripcion as descripcion,
        tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion from productos 
        JOIN ubicacion ON ubicacion.id_ubicacion =  productos.id_ubicacion 
        JOIN tiempo_entrega ON tiempo_entrega.id_tiempo_entrega = productos.id_tiempo_entrega; 
        `);
            if (data.length > 0) {
                res.status(200).json({ mensaje: "Estos son los productos", data: data })
                return
            };
            throw 0

        } catch (error) {
            if (error == 0) {
                res.status(400).json({ mensaje: "No hay productos para mostrar", data: [] })
            }
        }
    },
    obtenerProductoUnico: async (req, res) => {
        const { id_producto } = req.params;

        try {
            const producto = await pool.query(`SELECT id_producto, nombre, precio_hora, precio_dia, productos.descripcion as descripcion,
            tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion from productos 
            JOIN ubicacion ON ubicacion.id_ubicacion =  productos.id_ubicacion 
            JOIN tiempo_entrega ON tiempo_entrega.id_tiempo_entrega = productos.id_tiempo_entrega WHERE productos.id_producto = ${id_producto}`);

            if (producto.length > 0) {
                res.status(200).json({ mensaje: "Este es el producto", data: producto })
                return
            }
            throw 0
        } catch (error) {
            if (error == 0) {
                res.status(400).json({ mensaje: "No hay productos para mostrar", data: [] })
            }
        }
    },
    obtenerProductosDeUsuario: async (req, res) =>{
        const { id_usuario } = req.params;
        try {
            const producto = await pool.query(`SELECT id_producto, nombre, precio_hora, precio_dia, productos.descripcion as descripcion,
            tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion from productos 
            JOIN ubicacion ON ubicacion.id_ubicacion =  productos.id_ubicacion 
            JOIN tiempo_entrega ON tiempo_entrega.id_tiempo_entrega = productos.id_tiempo_entrega WHERE productos.id_usuario = ${id_usuario}`);

            if (producto.length > 0) {
                res.status(200).json({ mensaje: "Este es el producto", data: producto })
                return
            }
            throw 0
        } catch (error) {
            if (error == 0) {
                res.status(400).json({ mensaje: "No hay productos para mostrar", data: [] })
            }
        }
    }


}

module.exports = controladorProductos