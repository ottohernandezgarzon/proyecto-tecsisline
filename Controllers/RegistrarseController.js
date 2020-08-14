' use strict '

const RegistrarseModel = require("../Models/RegistrarseModel");

// Recursos

class RegistrarseController extends RegistrarseModel{
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/registrar');
    }
    return index;
  }
  create(){
    let create = (req,res)=>{
      res.redirect('/inicio')
    }
    return create;
  }
}
module.exports=RegistrarseController;