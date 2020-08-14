' use strict '
// Recursos
const dbConnection = require("./database/dbConnection");
// Clase RegistrarseModel con herencia a dbConnection
class RegistrarseModel extends dbConnection{

}
module.exports= RegistrarseModel;