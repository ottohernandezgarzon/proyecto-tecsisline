' use strict '

// Clase PagosController con herencia a PagoModel
class PagosController {
  index(){
    let index = (req,res)=>{
      res.render('paginas view/pago/pago',{pretty:true})
    }
    return index;
  }
}
const pago = new PagosController();
module.exports = pago;