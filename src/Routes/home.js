"use strict"

const home = require("../controllers/HomeController")

const homeRouter = require("express").Router()

homeRouter
  .get("/", home.index())
  .get("/inicio", home.inicio())
  .get("/soporte", home.soporte())

module.exports = homeRouter
