' use strict '


files = require('path').join,
fs = require('fs')
// Recursos

class RegistrarseController{
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/registrar');
    }
    return index;
  }
  create(datos){
    let create = (req,res)=>{
      // res.redirect('/inicio')
      // const
      // // inputs = JSON.stringify(req.body),
      // formaData = new FormData(req.body),
      // datos =
      // {
      //   primerNombre : req.formData.ap(primerNombre),
      //   segundoNombre : req.body. segundoNombre,
      //   primerApellido :req.body.primerApellido,
      //   segundoApellido:req.body.segundoApellido,
      //   foto: req.body.foto,
      //   nombreUsuario:req.body.nombreUsuario,
      //   email: req.body.email,
      //   password:req.body.password,
      //   contraPassword:req.body.contraPassword,
      //   direction:req.body.direction,
      //   telephone:req.body.telephone,
      //   country:req.body.country
      // }
      console.log(req.body);
      res.redirect('/inicio');
    }
    return create
  }
}


const registrarse = new RegistrarseController();
module.exports=registrarse;