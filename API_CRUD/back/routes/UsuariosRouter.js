const express = require("express");

const {traerUsuarios, traerUsuario, crearUsuario, actualizarUsurio, borrarUsuario} = require("../controllers/usuariosControllers.js");

const router = express.Router();

router.get("/", traerUsuarios);
router.get ("/:id", traerUsuario );
router.post ("/", crearUsuario);
router.put ("/:id", actualizarUsurio);
router.delete ("/:id", borrarUsuario); 


module.exports = router;