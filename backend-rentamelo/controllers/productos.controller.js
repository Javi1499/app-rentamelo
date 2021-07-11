const pool = require("../models/connection");
const AWS = require('aws-sdk');



const controladorProductos = {
    agregarProducto: async (req, res) => {
        console.log("Entro")
        const { nombre, descripcion, precio_hora, precio_dia, id_tiempo_entrega, id_ubicacion} = req.body;
       
        const nuevoProducto = {
            nombre,
            descripcion,
            precio_hora,
            precio_dia,
            id_tiempo_entrega,
            id_ubicacion,
            id_usuario: req.id_usuario,
            uri_img:'',
            id_estatus: 1
        }
        const file = req.file;

        let s3Bucket = new AWS.S3({
            accessKeyId: "AKIASERNXXT3VJIMZOKI",
            secretAccessKey: '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',
            region: "us-east-2"
        });
        const uniqueName = (Date.now()).toString()
        const params = {
            ACL: 'public-read',
            Body: file.buffer,
            Bucket: "rentamelo",
            ContentType: file.mimetype,
            Key: uniqueName,
        };
        let urlDefault = "https://rentamelo.s3.us-east-2.amazonaws.com/"
        s3Bucket.upload(params, (err, data)=>{
            if(err) return res.status(500).json({mensaje:"Hubo un error al cargar la imagen", data:[]});
            
        return data
        })
        
        const urlImg = urlDefault+uniqueName;
        console.log(urlImg)
        nuevoProducto.uri_img=urlImg;

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
        tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion, productos.uri_img from productos 
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
            tiempo_entrega.descripcion AS tiempo_entrega,municipio as ubicacion, uri_img from productos 
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
    obtenerProductosDeUsuario: async (req, res) => {
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