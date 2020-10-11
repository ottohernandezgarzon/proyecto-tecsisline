'use strict';


// Recursos

class InicioController {
  index(){
    let index =(req,res)=>{
      res.render('paginas view/inicio',{pretty:true});
    }
    return index;
  }
}
const inicio = new InicioController;
module.exports =inicio;