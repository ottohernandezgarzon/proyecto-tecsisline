'use strict';


// Recursos

class InicioController {
  index(){
    let index =(req,res)=>{
      res.render('paginas view/inicio');
    }
    return index;
  }
}
const inicio = new InicioController;
module.exports =inicio;