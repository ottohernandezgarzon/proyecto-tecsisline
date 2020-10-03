'use strict'



const express = require('express'),
Multer = require('multer'),
Home = require('../controllers/HomeController'),
Inicio = require('../Controllers/InicioControllers'),
Login = require('../Controllers/LoginController'),
// Registrarse = require('../Controllers/RegistrarseController'),
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
  .get('/registrarse',(req,res)=>{
    res.render('paginas view/login/registrar')
  })
  .get('/autentificarse',Autentificarse.index())
  .get('/recuperar',Recuperar.index())
  .get('/Productos',Productos.index())
  .get('/soporte',Soporte.index())
  .get('/Perfil',Perfil.index())
  .get('/Contactos', Contactos.index())
  .get('/pago',Pagos.index())

  .post('/datos',(req,res)=>{
    let datos ={
      primerNombre : req.body.primerNombre,
      segundoNombre : req.body.segundoNombre,
      primerApellido : req.body.primerApellido,
      segundoApellido : req.body.segundoApellido,
      tipoDocumento : req.body.tipoDocumento,
      documento : req.body.documento,
      // foto : req.file.filename,
      email : req.body.email,
      password : req.body.password,
      direction :req.body.direction,
      genero : req.body.genero,
      telephone : req.body.telephone,
      country : req.body.country
    }
    console.log(datos);
    res.send(`
      <h1>datos recibidos</h1>
    `)
    res.status(200)
  })

  // .get('/Inventario', control.read())
  // .get('/update/:idNews',control.updateR())
  // .post('/update/:idNews',control.update())
  // .get('/deprlete/:idNews', control.delete())
  // .post('/Inventario/insert',control.create())
const routers=routerPaths
module.exports= routers;