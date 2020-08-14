' use  strict '
// Recursos
const dbConnection = require("./database/dbConnection");
// Clase ContactoModel con herecia a dbConnection
class ContactoModel extends dbConnection{

}
module.exports = ContactoModel;