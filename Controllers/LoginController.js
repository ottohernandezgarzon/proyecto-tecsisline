' user strict';
// Recursos

class LoginController {
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/login')
    }
    return index;
  }
}
const login = new LoginController();
module.exports = login ;