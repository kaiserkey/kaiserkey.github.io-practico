
const db = require ("../data/db.js");

const {DataTypes} = require ("sequelize");

const UsuariosModel = db.define("usuarios", {
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    mail:{type:DataTypes.STRING},
    telefono:{type:DataTypes.INTEGER},
    password:{type:DataTypes.STRING},
    formaContacto:{type:DataTypes.STRING},
});

module.exports = UsuariosModel;