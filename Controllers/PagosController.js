' use strict '
// Recursos
const PagoModel = require("../Models/PagoModel");
// Clase PagosController con herencia a PagoModel
class PagosController extends PagoModel{
  index(){
    let index = (req,res)=>{
      res.render('paginas view/pagos/pago')
    }
    return index;
  }
}
module.exports = PagosController;