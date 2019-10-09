'use strict'
const express = require('express'),
  path=require('path').join,
  app = express(),
  publicDir=path(__dirname,'/public'),
  port = 3000;
  app.set('view engine', 'pug')
     .get('/', (req, res) => {
      res.render('index.pug')
    })  
    .get('/inicio',(req,res)=>{
      res.render('paginas view/inicio.pug')
    })
    .get('/login',(req,res) =>{
      res.render('login/login')
    })
  .use(express.static(publicDir))
   .listen(port, () => console.log('http://localhost:'+port))