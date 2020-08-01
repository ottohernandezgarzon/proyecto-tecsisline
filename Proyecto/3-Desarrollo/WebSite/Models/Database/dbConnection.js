' use strict ';

class dbConnection{
	mysql(){
		const db = require('mysql'),
		 conf = require('./configConnection.json'),		
		 dbOptions= {
			 host : conf.mysql.host,
			 port : conf.mysql.port,
			 user : conf.mysql.user,
			 password : conf.mysql.pass,
			 database : conf.mysql.db
		 },
		 myConn = db.createConnection(dbOptions);

		 myConn.connect((err) => {
			 return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : console.log(`Conexión establecida con MySQL N°: ${myConn.threadId}`);
		 });
		 
	}
}
module.exports = dbConnection;