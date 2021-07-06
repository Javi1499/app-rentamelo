const express = require('express');
const router = express.Router();
const pool = require("../models/connection");
const {agregarProducto, obtenerProductos, obtenerProductoUnico, obtenerProductosDeUsuario} = require("../controllers/productos.controller")

router.get('/', obtenerProductos ); //Ruta para obtener todos los productos publicados
router.get('/:id_producto',obtenerProductoUnico);//Ruta para agregar un nuevo producto
router.get('/tus-productos/:id_usuario',obtenerProductosDeUsuario);//Ruta para agregar un nuevo producto
router.post('/nuevo-producto',agregarProducto);//Ruta para agregar un nuevo producto



module.exports = router;