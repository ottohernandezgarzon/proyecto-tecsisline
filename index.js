' use strict ';
// Recursos o paquetes primordiales
const express = require('express'),
app = express(),
imagen= require('./middleware/imagen.multer'),
db= require('./Models/model'),
router=require('./Routes/router'),
bodyParser = require('body-parser');

var port = port ? 3000 : 8080;

// db.sequelize.sync()

// configuración de los recursos o paquetes
app
.set('view engine', 'pug')
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))
.use(express.static('public'))
.use(imagen)
.use(router)
.listen(port, () => console.log('Listo en  la Link: http://localhost:'+port));