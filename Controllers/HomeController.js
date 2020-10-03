' use strict';
// Recursos

// Clase HomeController con herencia a HomeModel
class HomeController {

  index(){
    let index = (req,res)=>{
      res.render('index');
    }
    return  index;
  }
}
const home = new HomeController();
module.exports = home;