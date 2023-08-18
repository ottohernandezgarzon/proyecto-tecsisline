' user strict';
// Recursos

class LoginController {
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/login',{pretty:true})
    }
    return index;
  }
}
const login = new LoginController();
module.exports = login ;