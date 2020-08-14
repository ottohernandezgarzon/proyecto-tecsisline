' use strict '
// Recursos
const RecuperarModel = require("../Models/RecuperarModel");
// Clase RecuperarController con herencia a RecuperarModel
class RecuperarController extends RecuperarModel{
  index(){
    let index=(req,res)=>{
      res.render('paginas view/login/recuperar');
    }
    return index;
  }
}
module.exports = RecuperarController;