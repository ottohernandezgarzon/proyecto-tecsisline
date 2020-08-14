' use strict';
const dbConnection = require("./database/dbConnection");
// Clase InicioModel con herencia a dbConnection
class InicioModel extends dbConnection{

}
module.exports = InicioModel;