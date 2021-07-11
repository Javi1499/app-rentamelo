const express = require('express');
const router = express.Router();
const pool = require("../models/connection");
const multer = require('multer');
const {verifyJWT} = require("../lib/helpers")
const {agregarProducto, obtenerProductos, obtenerProductoUnico, obtenerProductosDeUsuario, cargarImg} = require("../controllers/productos.controller")
const storage = multer.memoryStorage();
const upload = multer({storage});


router.get('/', verifyJWT, obtenerProductos ); //Ruta para obtener todos los productos publicados
router.get('/:id_producto',obtenerProductoUnico);//Ruta para agregar un nuevo producto
router.get('/tus-productos/:id_usuario',obtenerProductosDeUsuario);//Ruta para agregar un nuevo producto
router.post('/nuevo-producto',verifyJWT,upload.single("file"), agregarProducto);//Ruta para agregar un nuevo producto



module.exports = router;