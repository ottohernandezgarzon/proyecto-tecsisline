' use strict '
// Recuperar
const dbConnection = require("./database/dbConnection");
// Clase ProductoModel con herencia a dbConnection
class ProductoModel extends dbConnection{
  
}
module.exports = ProductoModel;