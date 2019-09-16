'use strict'
const express = require('express'),
  path=require('path').join,
  app = express(),
  publicDir=path(__dirname,'/public'),
  port = 3000;
  app.set('view engine', 'pug')
     .get('/', (req, res) => {
      res.render('index')
    })  
  .use(express.static(publicDir))
   .listen(port, () => console.log('http://localhost:'+port))