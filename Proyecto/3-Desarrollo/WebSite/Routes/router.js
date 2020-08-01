const express = require('express'),
routerPaths= express.Router(),
dataControl = require('../Controllers/dataControl');
const control = new dataControl(); 
routerPaths
  .get('/',(req,res)=>{
  res.render('index')
  })
  .get('/inicio',(req,res)=>{
  res.render('paginas view/inicio')
  })
  .get('/login',(req,res) =>{
  res.render('paginas view/login/login')
  })
  .get('/registrarse',(req,res)=>{
    res.render('paginas view/login/registrar')
  })
  .get('/autentificarse',(req,res) =>{
  res.render('paginas view/login/autentificarse')
  })
  .get('/recuperar',(req,res)=>{
    res.render('paginas view/login/recuperar')
  })
  .get('/carousel',(req,res) =>{
    res.render('paginas view/carousel')
  })
  .get('/Productos',(req,res) =>{
    res.render('paginas view/producto/productos')
  })
  .get('/soporte',(req,res)=>{
    res.render('paginas view/soporte/soporte')
  })
  .get('/Perfil',(req,res)=>{
    res.render('paginas view/perfil/perfiles')
  })
  .get('/Contactos',(req,res)=>{
    res.render('paginas view/contactos/contactos') 
  })  
  .get('/pago',(req,res)=>{
    res.render('paginas view/pago/Pago')
  })
  .get('/Credito',(req,res)=>{
    res.render('paginas view/pago/Credito')
  })
  .get('/Efectivo',(req,res)=>{
    res.render('paginas view/pago/Efectivo')
  })
  .post('/registrarse',(req,res)=>{
    res.redirect('/inicio')
  })  
  .get('/Inventario', control.read())
  .get('/update/:idNews',control.updateR()) 
  .post('/update/:idNews',control.update()) 
  .get('/delete/:idNews', control.delete()) 
  .post('/Inventario/insert',control.create())

module.exports=routerPaths;