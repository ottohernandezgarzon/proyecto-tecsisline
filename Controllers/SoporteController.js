' use strict '
// Recursos
const SoporteModel = require("../Models/SoporteModel")
// Clase SoporteController con herencia SoporteModel
class SoporteController extends SoporteModel{
  index(){
    let index = (req,res)=>{
      res.render('paginas view/soporte/soporte')
    }
    return index;
  }
}
module.exports = SoporteController;