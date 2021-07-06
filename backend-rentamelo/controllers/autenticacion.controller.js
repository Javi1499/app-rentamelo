const pool = require("../models/connection");
const helpers = require('../lib/helpers');
//const jtw = require("jsonwebtoken");

const controladorAutenticacion = {
    iniciarSesion: async (req, res) => {
        console.log(req.body);
        const { email, password } = req.body;
        const respuesta = await pool.query(`SELECT id_usuario, email, nombre, password FROM usuarios WHERE email = ?`, [email]);
        if (respuesta.length > 0) {
            const usuario = respuesta[0];
            const validarPassword = await helpers.loginPassword(password, usuario.password);
            console.log(password)
            if (validarPassword) {

                const user={
                    email:respuesta[0].email,
                    usuario:respuesta[0].usuario
                }
                // const token = jtw.sign(user, "secretJWT");
                res.json({ status: 200, mensaje: "Bienvenido", auth: true, /*token,*/ data: {id_usuario:respuesta[0].id_usuario, rol:respuesta[0].rol} })
                return
            }
            res.json({ status: 400, mensaje: "Contraseña incorrecta", auth: false });
            return;
        }
        res.json({ status: 400, mensaje: "Usuario no existe", auth: false });
    },
    singUp: async (req, res) => {
        const { nombre, apellido_paterno, apellido_materno,telefono,fecha_nacimiento,email, password  } = req.body;
        const newUser = {
            nombre,
            apellido_paterno,
            apellido_materno,
            telefono,
            fecha_nacimiento,
            email,
            password,
            estatus: 1
        }

        const emailVerificaction = await pool.query(`SELECT * FROM usuarios WHERE email = "${email}"`)
        if(emailVerificaction.length>0){
            res.json({ status: 400, mensaje:"Este correo ya esta registrado",data:[]});
            return;
        }

        newUser.password = await helpers.encryptPassword(password);
        const result = await pool.query("INSERT INTO usuarios set ?", [newUser]);
        res.json({ status: 200, data:result });
    }

}



module.exports = controladorAutenticacion