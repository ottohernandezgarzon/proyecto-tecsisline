' user strict';
// Recursos
const LoginModel = require("../Models/LoginModel");

class LoginController extends LoginModel{
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/login')
    }
    return index;
  }
}
module.exports = LoginController;