
' use strict '
// Recursos
const dataModels = require('../Models/dataModels');
const e = require('express');
//  Clase control con herencia a dataModels
class dataControl extends dataModels{
  // atributos
  createData;
  readData ;
  updateData;
  updateId;
  deleteData;
  // metodo de insertar datos
  create(_create,res,sour){
    _create = (require,response)=>{
      const {title,news} =require.body; 
      this.createData = {title,news};
      sour = (error,result) => {
        if(error){
          throw error
        }else
        {
          console.log(`Insert Successful`);
          response.redirect('/Inventario');
          return this.read()
        }
      }
      res = super.dataCreate(this.createData,sour);
    }
    return _create;
  }
  
  // metodo de lectura datos
  read(_read,res,sour) {
    _read= (require, response) => {
      response.render('paginas view/producto/inventarios',{ newsRows:this.readData});
    }
    sour = (error,result)=>{
      if(error){
        console.error(`No se puede consultar debido a este error: ${error.sqlMessage}`);
        // error.end;
      }else{
        this.readData = result;
        console.log(`Success query`);
      }
      // return this.read();
    };
    res = super.dataRead(sour);
    return _read;
  }
  // método de lectura datos para actualizar
  updateR(_updateR,res,sour){
    _updateR = (require,response)=>{
      const {idNews} = require.params;
      this.updateId = idNews;
      sour=(err,rows)=>{
        response.render('paginas view/producto/update',{update:rows[0]})
      }
      res = super.dataUpdateR(this.updateId,sour)
    }
    return _updateR;
  }
  // método de actualizara datos
  update(_update,res,sour){
    _update = (require,response)=>{
      const
      {idNews} =require.params,
      row = require.body;
      this.updateId = idNews;
      this.updateData = row;
      
      sour =(error,result) =>{
        if(error){
          throw error
        }else
        {
          console.log(`Update Successful`);
          response.redirect('/Inventario');
          return this.read()
        }
      }
      res = super.dataUpdate(this.updateData,this.updateId,sour)
    }
    return _update;
  }
  // método de eliminar datos
  delete(_delete,res,sour){
    _delete = (require,response)=>{
      const{idNews} = require.params;
      this.dataDelete = idNews;
      console.log(idNews)
      sour = (error,result)=>{
        if(error){
          throw error;
        }else
        {
          console.log(`Delete Successful`);
          response.redirect('/Inventario');
          return this.read()
        }
      }
      res = super.dataDelete(this.dataDelete,sour)
    }
    return _delete;
  }
}
// exporta en modulo de la clase dataControl 
module.exports = dataControl;