const express = require('express');
const router = express.Router();
const pool = require("../models/connection");
const {realizarRenta, confirmarRecepcion, obtenerRentasArrendatario, obtenerRentasArrendador, finalizarRenta} = require("../controllers/rentas.controller")
const {verifyJWT} = require("../lib/helpers")

router.get("/arrendatario", verifyJWT, obtenerRentasArrendatario )
router.get("/arrendador", verifyJWT, obtenerRentasArrendador)
router.post('/realizar-renta',verifyJWT, realizarRenta);
router.post("/confirmar-recepcion/:idRent", verifyJWT, confirmarRecepcion )
router.post("/finalizar-renta/:idRent", verifyJWT, finalizarRenta )


module.exports = router;