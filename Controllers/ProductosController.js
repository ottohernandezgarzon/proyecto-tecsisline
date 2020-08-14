'use strict'
// Recursos
const ProductoModel = require("../Models/ProductoModel");
// Clase ProductoModel con herencia ProductoModel
class ProductosController extends ProductoModel{
  index(){
    let index = (req,res)=>{
      res.render('paginas view/producto/productos')
    }
    return index;
  }
}
module.exports = ProductosController;