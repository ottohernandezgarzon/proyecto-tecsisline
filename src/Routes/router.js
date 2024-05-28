"use strict"

const login = require("../Controllers/LoginController")
const dashboardRouter = require("./dashboard")

const homeRouter = require("./home"),
  productosRouter = require("./productos"),
  usuariosRouter = require("./usuarios"),
  routers = require("express").Router()

// Llamados
routers

  .use(homeRouter)
  .use(usuariosRouter)
  .use(productosRouter)
  .use(dashboardRouter)
  .use("/login", login.index())
module.exports = routers
