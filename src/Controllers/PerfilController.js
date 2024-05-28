" use strict "

const { request, response } = require("express")

// Recursos

// Clase PerfilController con herencia a PerfilModel
class PerfilController {
  index(req = request, res = response) {
    res.render("paginas view/perfil/perfiles", {
      pretty: true,
    })
  }
  create(req = request, res = response) {}
}
const perfil = new PerfilController()
module.exports = perfil
