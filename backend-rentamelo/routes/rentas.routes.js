const express = require('express');
const router = express.Router();
const pool = require("../models/connection");
const {realizarRenta, confirmarRecepcion} = require("../controllers/rentas.controller")

router.post('/realizar-renta',realizarRenta);
router.post("/confirmar-recepcion/:id_renta", confirmarRecepcion )


module.exports = router;