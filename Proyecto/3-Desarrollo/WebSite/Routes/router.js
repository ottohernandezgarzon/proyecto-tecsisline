  const express = require('express'),
    routerPaths= express.Router()

routerPaths
  .get('/',(req,res)=>{
    res.render('index')
  })
  .get('/inicio',(req,res)=>{
    res.render('paginas view/inicio')
  })
  .get('/productos',(req,res)=>{
    res.render('paginas view/productos')
  })
  .get('/login',(req,res) =>{
    res.render('login/login')
  })
  .get('/autentificarse',(req,res) =>{
  res.render('login/autentificarse')
  })
  .get('/recuperar',(req,res) =>{
    res.render('login/recuperar')
  })
    

module.exports=routerPaths;