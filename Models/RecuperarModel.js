' use strict '
// Recursos
const dbConnection = require("./database/dbConnection");
// Clase RecuperarModel con herencia a dbConnection
class RecuperarModel extends dbConnection{

}
module.exports = RecuperarModel;