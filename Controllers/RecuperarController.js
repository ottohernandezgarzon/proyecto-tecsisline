' use strict '
// Recursos
// Clase RecuperarController con herencia a RecuperarModel
class RecuperarController{
  index(){
    let index=(req,res)=>{
      res.render('paginas view/login/recuperar',{pretty:true});
    }
    return index;
  }
}
const recuperar = new RecuperarController();
module.exports = recuperar;