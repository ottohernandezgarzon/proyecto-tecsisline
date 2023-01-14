' use strict ';
const registrarse = require("./Controllers/RegistrarseController");

// Recursos o paquetes primordiales
const express = require("express"),
  app = express(),
  imagen = require("./middleware/imagen.multer"),
  router = require("./Routes/router"),
  Conectar = require("./Models/Conectar");

const conectar = new Conectar().conectar().sequelize;

const port = 80 || 8080 || 3000 || process.env.PORT;

// configuración de los recursos o paquetes
app
  .set("view engine", "pug")
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(router)
  .use(imagen)
  .listen(port, () => {
    console.log("Listo en  la Link: http://localhost:" + port);
    conectar
      .sync({ force: false })
      .then((data) => {
        console.info("Conexión a la base de datos es exitosa");
      })
      .catch((error) => {
        let s = [];
        s = Error(error).message.split("r: ");
        console.error("Falla la conexión a la base de datos \nError: " + s[1]);
      });
  });
