' use strict '

const ContactoModel = require("../Models/ContactoModel");

// Recursos
class  ContactosController extends ContactoModel{
  index(){
    let index = (req,res)=>{
      res.render('paginas view/contactos/contactos')
    }
    return index;
  }
}
module.exports = ContactosController;