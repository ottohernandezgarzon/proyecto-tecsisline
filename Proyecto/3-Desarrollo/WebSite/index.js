' use strict ';
// Recursos o paquetes primordiales
const express = require('express'),
app = express(),
path=require('path').join,
publicDir=path(__dirname+'/public'),
router=require('./Routes/router'),
bodyParser = require('body-parser'),
port = 3000;

// configuración de los recursos o paquetes
app
  .set('view engine', 'pug') 
  .use(express.static(publicDir))
  .use(bodyParser.urlencoded({extended:false}))
  .use(bodyParser.json())
  .use(router)
  .listen(port, () => console.log('http://localhost:'+port));