' use strict '
// Recursos
const AutentificarseModal = require('../Models/AutentificarseModal')
// Clase AutentificarseController con herencia a AutentificarseModal
class AutentificarseController extends AutentificarseModal{
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/autentificarse');
    }
    return index;
  }
}
module.exports = AutentificarseController;