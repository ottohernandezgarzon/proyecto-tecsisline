" use strict"
// Recursos
const { request, response } = require("express")
// Clase HomeController con herencia a HomeModel
class HomeController {
  index() {
    let index = (req = request, res = response) => {
      res.render("index", { pretty: true })
    }
    return index
  }
  inicio() {
    let index = (req, res) => {
      res.render("paginas view/inicio", { pretty: true })
    }
    return index
  }
  soporte() {
    let index = (req, res) => {
      res.render("paginas view/soporte/soporte", { pretty: true })
    }
    return index
  }
}
const home = new HomeController()
module.exports = home
