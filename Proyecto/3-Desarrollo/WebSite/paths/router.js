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
    

module.exports=routerPaths;