' use strict '
// Recursos
const dbConnection = require("./database/dbConnection");
// Clase  PagoModel con herencia a dbConnection
class PagoModel extends dbConnection{

}
module.exports = PagoModel;