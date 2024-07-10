const {Sequelize} = require("sequelize");

const db = new Sequelize ("usuariosdb", "root","", {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306
});

module.exports = db;