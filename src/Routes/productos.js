const pago = require("../Controllers/PagosController")
const producto = require("../Controllers/ProductosController")

const productosRouter = require("express").Router()

productosRouter.get("/productos", producto.index()).get("/pago", pago.index())

module.exports = productosRouter
