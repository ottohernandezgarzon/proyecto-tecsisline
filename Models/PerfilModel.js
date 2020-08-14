'use strict '
// Recursos
const dbConnection = require("./database/dbConnection");
// Clase PerfilModel con herencia a dbConnection
class PerfilModel extends dbConnection{

}
module.exports = PerfilModel;