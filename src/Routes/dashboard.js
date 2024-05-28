const dashboard = require("../Controllers/DashBoardController")

const dashboardRouter = require("express").Router()

dashboardRouter
  .get("/Administracion", dashboard.index())
  .get("/dashboard", dashboard.read())
  .get("/tables", dashboard.read())
  .get("/update/:primerNombre", dashboard.readArt())
  .get("/delete/:datos", dashboard.delete())
  .post("/update/:primerNombre", dashboard.update())

module.exports = dashboardRouter
