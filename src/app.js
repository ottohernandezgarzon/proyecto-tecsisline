" use strict ";
// Recursos o paquetes primordiales
const express = require("express"),
  app = express(),
  imagen = require("./middleware/imagen.multer"),
  router = require("./Routes/router");

// configuración de los recursos o paquetes
app
  .set("view engine", "pug")
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(router)
  .use(imagen);

module.exports = app;
