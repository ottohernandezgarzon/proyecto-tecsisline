const autentificarse = require("../Controllers/AutentificarseController")
const contactos = require("../Controllers/ContactosController")
const perfil = require("../Controllers/PerfilController")
const recuperar = require("../Controllers/RecuperarController")
const registrarse = require("../Controllers/RegistrarseController")

const usuariosRouter = require("express").Router()

//region //TODO Registros de usuarios
usuariosRouter
  .get("/registrarse", registrarse.index)
  .get("/read", registrarse.read())
  .post("/registrarse", registrarse.create)
//region //ANCHOR Otras acciones
usuariosRouter
  .get("/perfil", perfil.index)
  .get("/autenticarcion", autentificarse.index())
  .get("/recuperar", recuperar.index())
  .get("/Contactos", contactos.index())

module.exports = usuariosRouter
