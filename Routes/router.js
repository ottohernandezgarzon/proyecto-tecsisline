"use strict";
const express = require("express"),
  Home = require("../controllers/HomeController"),
  Inicio = require("../Controllers/InicioControllers"),
  Login = require("../Controllers/LoginController"),
  Registrarse = require("../Controllers/RegistrarseController"),
  Autentificarse = require("../Controllers/AutentificarseController"),
  Recuperar = require("../Controllers/RecuperarController"),
  Productos = require("../Controllers/ProductosController"),
  Soporte = require("../Controllers/SoporteController"),
  Perfil = require("../Controllers/PerfilController"),
  Contactos = require("../Controllers/ContactosController"),
  Pagos = require("../Controllers/PagosController"),
  Dashboard = require("../Controllers/DashBoardController"),
  routerPaths = express.Router();
routerPaths
  // index de la cada pagina del sitio Web
  .get("/", Home.index())
  .get("/inicio", Inicio.index())
  .get("/login", Login.index())
  .get("/registrarse", Registrarse.index())
  .get("/autentificarse", Autentificarse.index())
  .get("/recuperar", Recuperar.index())
  .get("/Productos", Productos.index())
  .get("/soporte", Soporte.index())
  .get("/Perfil", Perfil.index())
  .get("/Contactos", Contactos.index())
  .get("/pago", Pagos.index())
  .get("/Administracion", Dashboard.index())
  .get("/dashboard", Dashboard.read())

  .get("/read", Registrarse.read())
  .post("/registrar", Registrarse.create())

  .get("/tables", Dashboard.read())
  .post("/update/:primerNombre", Dashboard.update())
  .get("/update/:primerNombre", Dashboard.readArt())
  .get("/delete/:datos", Dashboard.delete());

// .get('/Inventario', control.read())
// .get('/update/:idNews',control.updateR())
// .post('/update/:idNews',control.update())
// .get('/delete/:idNews', control.delete())
// .post('/Inventario/insert',control.create())
const routers = routerPaths;
module.exports = routers;
