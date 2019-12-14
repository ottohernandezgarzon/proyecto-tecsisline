const express = require('express'),
routerPaths= express.Router()

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
  .get('/Inventario',(req,res) =>{
    res.render('paginas view/producto/inventarios')
  })
  .get('/Perfil',(req,res)=>{
    res.render('paginas view/perfil/perfiles')
  })
  .get('/Contactos',(req,res)=>{res.render('paginas view/producto/contactos/contactos')   
  })
    
  
    

module.exports=routerPaths;