'use strict'
// Recursos
// Clase ProductoModel con herencia ProductoModel
class ProductosController {
  index(){
    let index = (req,res)=>{
      res.render('paginas view/producto/productos')
    }
    return index;
  }
}
const producto = new ProductosController();
module.exports = producto;