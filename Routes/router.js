'use strict'

const express = require('express'),
HomeController = require('../controllers/HomeController'),
InicioController = require('../Controllers/InicioControllers'),
LoginController = require('../Controllers/LoginController'),
RegistrarseController = require('../Controllers/RegistrarseController'),
AutentificarseController =require('../Controllers/AutentificarseController'),
RecuperarController = require('../Controllers/RecuperarController'),
ProductosController =require('../Controllers/ProductosController'),
SoporteController = require('../Controllers/SoporteController'),
PerfilController = require('../Controllers/PerfilController'), 
ContactosController = require('../Controllers/ContactosController'),
PagosController = require('../Controllers/PagosController'),
routerPaths= express.Router();

// dataControl = require('../Controllers/dataControl');
// const control = new dataControl(); 
const Inicio = new InicioController(),
Home= new HomeController(),
Login = new LoginController(),
Registrar = new RegistrarseController(),
Autentificar = new AutentificarseController(),
Recuperar = new RecuperarController(),
Productos =new ProductosController(),
Soporte = new SoporteController(),
Perfil = new PerfilController(),
Contactos = new ContactosController(),
Pagos = new PagosController();
routerPaths
  .get('/',Home.index())
  .get('/inicio',Inicio.index())
  .get('/login',Login.index())
  .get('/registrarse',Registrar.index())
  .get('/autentificarse',Autentificar.index())
  .get('/recuperar',Recuperar.index())
  .get('/Productos',Productos.index())
  .get('/soporte',Soporte.index())
  .get('/Perfil',Perfil.index())
  .get('/Contactos', Contactos.index())  
  .get('/pago',Pagos.index())

  .post('/registrarse',Registrar.create())  
  // .get('/Inventario', control.read())
  // .get('/update/:idNews',control.updateR()) 
  // .post('/update/:idNews',control.update()) 
  // .get('/delete/:idNews', control.delete()) 
  // .post('/Inventario/insert',control.create())

module.exports=routerPaths;