const pool = require("../models/connection");
const helpers = require('../lib/helpers');
const moment = require('moment');
//const jtw = require("jsonwebtoken");

const rentasController = {
    realizarRenta: async (req, res) => {
        console.log("Entro")
        const { tiempoRenta, id_producto, id_usuario } = req.body;
        console.log(tiempoRenta, id_producto, id_usuario)
        try {
            const infoProducto = await pool.query(`SELECT * FROM productos WHERE id_producto = ${id_producto}`);
            if (infoProducto.length < 1) {
                throw 0
            }
            if(infoProducto[0].id_usuario==id_usuario){
                throw 1
            }

            const nuevaRenta = {
                id_producto,
                id_usuario_arrendador: infoProducto[0].id_usuario,
                id_usuario_arrendatario: id_usuario,
                tiempo_renta_horas: tiempoRenta,
                id_estatus: 6
            }
            
            await pool.query(`INSERT INTO rentas SET ?`, [nuevaRenta]);
            await pool.query(`UPDATE productos SET id_estatus=5 WHERE id_producto = ${id_producto}`);
            res.status(200).json({ mensaje: "Renta procesada. En espera de confirmacion", data: [] })
        } catch (error) {
            if (error == 0) {
                res.status(400).json({ mensaje: "Hubo un error", data: [] })
            } else if (error==1) {
                res.status(400).json({ mensaje: "No puedes rentarte un producto de tu propiedad", data: [] })
            }
        }
      
    },
    confirmarRecepcion: async(req, res) =>{
        const {id_renta} = req.params; 
        const infoRenta = await pool.query(`SELECT tiempo_renta_horas from rentas WHERE id_renta = ${id_renta}`);
        const tiempoRenta = Number(infoRenta[0].tiempo_renta_horas)  
       const fechas= await helpers.obtenerHoraFinRenta(tiempoRenta);
    
       const tiemposRenta = {
           fecha_Inicio:fechas.fechaInicio,
           fecha_fin: fechas.fechaFinal,
           id_estatus: 5

       }
       await pool.query(`UPDATE rentas SET ? WHERE id_renta = ${id_renta}`, [tiemposRenta])

       res.status(200).json({mensaje:`Tu renta termina el ${fechas.msj}`, data:[]})
    }

}

module.exports = rentasController;