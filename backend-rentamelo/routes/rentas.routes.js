const express = require('express');
const router = express.Router();
const pool = require("../models/connection");
const {realizarRenta, confirmarRecepcion, obtenerRentasArrendatario} = require("../controllers/rentas.controller")
const {verifyJWT} = require("../lib/helpers")

router.get("/arrendatario", verifyJWT, obtenerRentasArrendatario )
router.post('/realizar-renta',verifyJWT, realizarRenta);
router.post("/confirmar-recepcion/:idRent", verifyJWT, confirmarRecepcion )


module.exports = router;