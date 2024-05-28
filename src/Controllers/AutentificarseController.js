' use strict '
// Recursos
// Clase AutentificarseController con herencia a AutentificarseModal
class AutentificarseController {
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/autentificarse',{pretty:true});
    }
    return index;
  }
}
const autentificarse = new AutentificarseController();
module.exports = autentificarse;