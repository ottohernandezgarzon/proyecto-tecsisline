' use strict '
// Recursos
const PerfilModel = require("../Models/PerfilModel");
// Clase PerfilController con herencia a PerfilModel
class PerfilController extends PerfilModel{
  index (){
    let index =(req,res)=>{
      res.render('paginas view/perfil/perfil.')
    }
    return index; 

  }
}
module.exports = PerfilController;