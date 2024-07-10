const UsuariosModel = require("../models/UsuariosModels.js")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS USUARIOS = READ - GET */
const traerUsuarios = async (req,res)=> {
try {
const usuarios =  await UsuariosModel.findAll()
res.json(usuarios)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION PARA TRAER UN USUARIO */

const traerUsuario = async (req,res)=>{
    try {
        const usuario = await UsuariosModel.findByPk(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.json({message:error.message})
    }
}


    /* FUNCION QUE CREA UN USUARIO  = CREATE - POST */

const crearUsuario = async (req,res)=>{
    try {
        await UsuariosModel.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE ACTUALIZA UN REGISTRO - UPDATE - PUT */

const actualizarUsurio = async(req,res)=>{
    try {
        await UsuariosModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("registro ACTUALIZADO correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION PARA BORRAR UN REGISTRO - DELETE - DELETE */
const borrarUsuario = async (req,res)=>{
    try {
        await UsuariosModel.destroy( { where:{id:req.params.id}})
        res.json("registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}



module.exports= {traerUsuarios, traerUsuario, crearUsuario, actualizarUsurio, borrarUsuario};