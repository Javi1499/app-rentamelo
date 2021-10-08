const express = require('express');
const router = express.Router();
const pool = require("../models/connection");
const {realizarRenta, confirmarRecepcion} = require("../controllers/rentas.controller")
const {verifyJWT} = require("../lib/helpers")

router.post('/realizar-renta',verifyJWT, realizarRenta);
router.post("/confirmar-recepcion/:id_renta", verifyJWT, confirmarRecepcion )


module.exports = router;