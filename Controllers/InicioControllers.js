'use strict';

const InicioModel = require("../Models/IncioModel");

// Recursos

class InicioController extends InicioModel{
  index(){
    let index =(req,res)=>{
      res.render('paginas view/inicio');
    }
    return index;
  }
}

module.exports = InicioController;