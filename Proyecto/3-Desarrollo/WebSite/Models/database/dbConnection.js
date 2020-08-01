
' use strict ';
// Recursos
const 
mysql = require('mysql'),
conf = require('./configConnection.json');
// Clase dbConnection 
class dbConnection {
  // atributo
  op = {
    host: conf.mysql.host,
    port: conf.mysql.port,
    user: conf.mysql.user,
    password: conf.mysql.pass,
    database: conf.mysql.db,
  };
  // método para la conexión
  connect(con) {
    let opCon = this.op;
    con = mysql.createConnection(opCon);
    con.connect(
      (err) => {
      return (err) ? 
        console.error(`Error al Conectarse a MySQL: ${err.sqlMessage} \n verifica que esta encendido los servicios de base de datos`) 
      :
        console.log(`Conexión establecida con MySQL N°: ${con.threadId}
        `);
    });
    return con;

  }

}
// exporta en modulo de la clase dbConnection
module.exports = dbConnection;
