const pool = require("../models/connection");
const helpers = require('../lib/helpers');
const moment = require('moment');
//const jtw = require("jsonwebtoken");

const rentasController = {
    realizarRenta: async (req, res) => {
        console.log("Entro")
        const idUser = req.idUser;
        const { rentDays, idProduct } = req.body;
        console.log(req.body)
        console.log(rentDays, idProduct, idUser)
        try {
            const infoProducto = await pool.query(`SELECT * FROM products WHERE idProduct = ${idProduct}`);
            if (infoProducto.length < 1) {
                throw 0
            }
            if(infoProducto[0].idUser==idUser){
                throw 1
            }

            const nuevaRenta = {
                idProduct,
                idLesser: infoProducto[0].idUser,
                idLessee: idUser,
                rentDays: rentDays,
                idStatus: 6
            }
            
            await pool.query(`INSERT INTO rents SET ?`, [nuevaRenta]);
            await pool.query(`UPDATE products SET idStatus=5 WHERE idProduct = ${idProduct}`);
            res.status(200).json({ mensaje: "Renta procesada. En espera de confirmacion", data: [] })
        } catch (error) {
            if (error == 0) {
               
                res.status(400).json({ mensaje: "El producto no existe", data: [] })
            } else if (error==1) {
                console.error(error)
                res.json({ status:402, mensaje: "No puedes rentarte un producto de tu propiedad", data: [] })
            } else{
                console.error(error)
            }
        }
      
    },
    confirmarRecepcion: async(req, res) =>{
        console.log("entro")
        const {idRent} = req.params; 
        const infoRenta = await pool.query(`SELECT rentDays from rents WHERE idRent = ${idRent}`);
        const rentDays = Number(infoRenta[0].rentDays)  
       const fechas= await helpers.obtenerHoraFinRenta(rentDays);
    
       const tiemposRenta = {
           startDate:fechas.fechaInicio,
           endDate: fechas.fechaFinal,
           idStatus: 5

       }
       try {
        await pool.query(`UPDATE rents SET ? WHERE idRent = ${idRent}`, [tiemposRenta])

        res.status(200).json({mensaje:`Tu renta termina el ${fechas.msj}`, data:[]})
           
       } catch (error) {
           console.error(error)
       }
      
    },
    obtenerRentasArrendatario: async(req, res) =>{
        console.log("entro")
        const {idUser} = req
       try {
        const rents = await pool.query(`SELECT idRent, products.name AS name,products.idProduct AS idProduct, products.description AS description, 
        users.firstName AS firstName, products.img1 as img1, users.lastName AS lastName, startDate, endDate, status.description AS status, rentDays from rents
        JOIN products ON rents.idProduct = products.idProduct
        JOIN users ON rents.idLesser = users.idUser
        JOIN status ON rents.idStatus = status.idStatus WHERE idLessee = ${idUser}` )

        res.status(200).json({mensaje:"Esto es", data:rents})
           
       } catch (error) {
           console.error(error)
           res.status(400).json({mensaje: "Hubo un error", data:[]})
       }
      
    }

}

module.exports = rentasController;