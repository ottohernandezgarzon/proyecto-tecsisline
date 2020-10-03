' use strict '
// Recursos
// Clase PerfilController con herencia a PerfilModel
class PerfilController{
  index (){
    let index =(req,res)=>{
      res.render('paginas view/perfil/perfil.')
    }
    return index;

  }
}
const perfil = new PerfilController();
module.exports = perfil;