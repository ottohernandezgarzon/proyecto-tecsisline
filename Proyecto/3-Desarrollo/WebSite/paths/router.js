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
  res.render('login/login')
  })
  .get('/authentication',(req,res) =>{
  res.render('login/authentication')
  })
  .get('/carousel',(req,res) =>{
    res.render('paginas view/carousel')
  })
  .get('/productos',(req,res) =>{
    res.render('paginas view/producto/productos')
  })
  
  .get('/inventario',(req,res) =>{
    res.render('paginas view/producto/inventarios')
  })

  
    

module.exports=routerPaths;