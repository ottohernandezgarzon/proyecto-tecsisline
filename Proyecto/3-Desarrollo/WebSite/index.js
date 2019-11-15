'use strict'
const express = require('express'),
app = express(),
path=require('path').join,
publicDir=path(__dirname+'/public'),
router=require('./Routes/router'),
  
  port = 3000;
  app
    .set('view engine', 'pug') 
    .use(express.static(publicDir))
    .use(router)
   .listen(port, () => console.log('http://localhost:'+port))