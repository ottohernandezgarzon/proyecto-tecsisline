const autentificarse = require('../Controllers/AutentificarseController')

const autenticaseRouter = require('express').Router()


autenticaseRouter.get('/recover-password', autentificarse.index())



module.exports = autenticaseRouter