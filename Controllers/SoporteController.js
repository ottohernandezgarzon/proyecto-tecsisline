' use strict '
// Recursos
// Clase SoporteController con herencia SoporteModel
class SoporteController {
  index(){
    let index = (req,res)=>{
      res.render('paginas view/soporte/soporte',{pretty:true})
    }
    return index;
  }
}
const soporte = new SoporteController();
module.exports = soporte;