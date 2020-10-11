'use strict'

const
  express = require('express'),
  Home = require('../controllers/HomeController'),
  Inicio = require('../Controllers/InicioControllers'),
  Login = require('../Controllers/LoginController'),
  Registrarse = require('../Controllers/RegistrarseController'),
  Autentificarse =require('../Controllers/AutentificarseController'),
  Recuperar = require('../Controllers/RecuperarController'),
  Productos =require('../Controllers/ProductosController'),
  Soporte = require('../Controllers/SoporteController'),
  Perfil = require('../Controllers/PerfilController'),
  Contactos = require('../Controllers/ContactosController'),
  Pagos = require('../Controllers/PagosController'),
  routerPaths= express.Router()

routerPaths
  .get('/',Home.index())
  .get('/inicio',Inicio.index())
  .get('/login',Login.index())
  .get('/registrarse',Registrarse.index())
  .get('/autentificarse',Autentificarse.index())
  .get('/recuperar',Recuperar.index())
  .get('/Productos',Productos.index())
  .get('/soporte',Soporte.index())
  .get('/Perfil',Perfil.index())
  .get('/Contactos', Contactos.index())
  .get('/pago',Pagos.index())

  .post('/registrarse',Registrarse.create())

  // .get('/Inventario', control.read())
  // .get('/update/:idNews',control.updateR())
  // .post('/update/:idNews',control.update())
  // .get('/deprlete/:idNews', control.delete())
  // .post('/Inventario/insert',control.create())
const routers=routerPaths
module.exports= routers;