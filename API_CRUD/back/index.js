const express = require("express");
const cors = require("cors");
const UsuariosRouter = require("./routes/UsuariosRouter.js");

const app = express();

const db = require("./data/db.js");

const port = 3030;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("estas en el home");
});

app.use("/usuarios", UsuariosRouter);

const conexionDB = async () => {
  try {
    await db.authenticate();
    console.log(`Conectado Ok a la Base de datos`);
  } catch (error) {
    console.log(`Hay un error y es el siguiente : ${error}`);
  }
};

app.listen(port, () => {
  conexionDB();
  console.log(`Servidor Ok en el puerto ${port}`);
});
