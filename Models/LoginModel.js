' user strict ';
// Recursos
const dbConnection = require("./database/dbConnection");
// Clase LoginModel con herencia a dbConnection
class LoginModel extends dbConnection{

}
module.exports = LoginModel;