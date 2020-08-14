' use strict';
// Recursos
const HomeModel = require('../Models/HomeModel');
// Clase HomeController con herencia a HomeModel
class HomeController extends HomeModel{

  index(){
    let index = (req,res)=>{
      res.render('index');
    }
    return  index;
  }
}
module.exports = HomeController;