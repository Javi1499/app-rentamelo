const pool = require("../models/connection");
const AWS = require('aws-sdk');
const e = require("express");



const controladorProductos = {
    agregarProducto: async (req, res) => {
        console.log("Entro")
        const { nombre, descripcion, precio_hora, precio_dia, id_tiempo_entrega, id_ubicacion } = req.body;

        const nuevoProducto = {
            nombre,
            descripcion,
            precio_hora,
            precio_dia,
            id_tiempo_entrega,
            id_ubicacion,
            id_usuario: req.id_usuario,
            uri_img_1: '',
            uri_img_2: '',
            uri_img_3: '',
            id_estatus: 1
        }
        const files = req.files;

        let s3Bucket = new AWS.S3({
            accessKeyId: "AKIASERNXXT3VJIMZOKI",
            secretAccessKey: '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',
            region: "us-east-2"
        });
        for (let index = 0; index < files.length; index++) {
            const uniqueName = (Date.now()).toString();
            const params = {
                ACL: 'public-read',
                Body: files[index].buffer,
                Bucket: "rentamelo",
                ContentType: files[index].mimetype,
                Key: uniqueName,
            };
            let urlDefault = "https://rentamelo.s3.us-east-2.amazonaws.com/"
            s3Bucket.upload(params, (err, data) => {
                if (err) return res.status(500).json({ mensaje: "Hubo un error al cargar la imagen", data: [] });

                return data
            })
            if (index == 0) {
                const urlImg= urlDefault + uniqueName;
                nuevoProducto.uri_img_1 = urlImg;
            } else if (index == 1) {
                const urlImg = urlDefault + uniqueName;
                nuevoProducto.uri_img_2 = urlImg;
            } else if (index == 2) {
                const urlImg = urlDefault + uniqueName;
                nuevoProducto.uri_img_3 = urlImg;
            }
        }


        try {
            pool.query("INSERT INTO productos set ?", [nuevoProducto])
            return res.status(200).json({ mensaje: "Tu producto fue publicado correctamente", data: [] })
        } catch (error) {
            res.status(400).json({ mensaje: "Hubo un error al publicar tu producto", data: [] })
        }

    },

    obtenerProductos: async (req, res) => {
        console.log(req.id_usuario + "Esto es")
        try {
            const data = await pool.query(`SELECT id_producto,nombre, precio_hora, precio_dia, productos.descripcion as descripcion,
        tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion, productos.uri_img_1 from productos 
        JOIN ubicacion ON ubicacion.id_ubicacion =  productos.id_ubicacion 
        JOIN tiempo_entrega ON tiempo_entrega.id_tiempo_entrega = productos.id_tiempo_entrega WHERE productos.id_estatus=1; 
        `);
            if (data.length > 0) {
                res.status(200).json({ mensaje: "Estos son los productos", data: data })
                return
            };
            throw 0

        } catch (error) {
            if (error == 0) {
                res.json({ mensaje: "No hay productos para mostrar", data: [] })
            }
        }
    },
    obtenerProductoUnico: async (req, res) => {
        const { id_producto } = req.params;

        try {
            const producto = await pool.query(`SELECT id_producto, nombre, precio_hora, precio_dia, productos.descripcion as descripcion,
            tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion, uri_img_1,uri_img_2, uri_img_3 , id_usuario from productos 
            JOIN ubicacion ON ubicacion.id_ubicacion =  productos.id_ubicacion 
            JOIN tiempo_entrega ON tiempo_entrega.id_tiempo_entrega = productos.id_tiempo_entrega WHERE productos.id_producto = ${id_producto}`);
            const infoUsuario = await pool.query(`SELECT nombre, apellido_paterno from usuarios WHERE id_usuario =${producto[0].id_usuario}`)
            if (producto.length > 0) {
                res.status(200).json({ mensaje: "Este es el producto", data: { producto: producto[0], infoUsuario: infoUsuario[0] } })
                return
            }
            throw 0
        } catch (error) {
            if (error == 0) {
                res.status(400).json({ mensaje: "No hay productos para mostrar", data: [] })
            }
        }
    },
    obtenerProductosDeUsuario: async (req, res) => {
        const id_usuario = req.id_usuario;
        try {
            const producto = await pool.query(`SELECT id_producto, nombre, precio_hora, precio_dia, productos.descripcion as descripcion,
            tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion, uri_img, productos.id_estatus from productos 
            JOIN ubicacion ON ubicacion.id_ubicacion =  productos.id_ubicacion 
            JOIN tiempo_entrega ON tiempo_entrega.id_tiempo_entrega = productos.id_tiempo_entrega 
            WHERE productos.id_usuario = ${id_usuario} AND id_estatus != 2 `);

            if (producto.length > 0) {
                res.status(200).json({ mensaje: "Este es el producto", data: producto })
                return
            }
            throw 0
        } catch (error) {
            if (error == 0) {
                res.json({ mensaje: "No hay productos para mostrar", data: [] })
            }
        }
    },
    pausarPublicacion: async (req, res) => {
        const { id_producto } = req.params;
        try {
            await pool.query(`UPDATE productos SET id_estatus = 3 WHERE id_producto = ${id_producto}`);
            res.status(200).json({ mensaje: "Publicacion pausada", data: [] })

        } catch (error) {
            if (error == 0) {
                res.json({ mensaje: "Hubo un error", data: [] })
            }
        }
    },
    reanudarPublicacion: async (req, res) => {
        const { id_producto } = req.params;
        try {
            await pool.query(`UPDATE productos SET id_estatus = 1 WHERE id_producto = ${id_producto}`);
            res.status(200).json({ mensaje: "Publicacion pausada", data: [] })

        } catch (error) {
            if (error == 0) {
                res.json({ mensaje: "Hubo un error", data: [] })
            }
        }
    },
    eliminarPublicacion: async (req, res) => {
        const { id_producto } = req.params;
        try {
            await pool.query(`UPDATE productos SET id_estatus = 2 WHERE id_producto = ${id_producto}`);
            res.status(200).json({ mensaje: "Publicacion eliminada", data: [] })

        } catch (error) {
            if (error == 0) {
                res.json({ mensaje: "Hubo un error", data: [] })
            }
        }
    }


}

module.exports = controladorProductos