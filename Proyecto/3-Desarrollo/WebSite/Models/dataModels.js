
' use strict ';
// Recursos 
const dbConnection = require('./database/dbConnection');
// Clase dataModal con herencia a dbConnection
class dataModal extends dbConnection {
  // atributo
  query = super.connect();
  // método de insertar datos a los servicios de mysql
  dataCreate(datas, source){
    const q = this.query
    q.query(`INSERT INTO news set ?`,datas,source);
    return source;
  };
  // método de consulta datos a los servicios de mysql
  dataRead(source) {
    const q = this.query;
    q.query(` SELECT * FROM news `, source );
  }
  // método de consulta datos para actualizar
  dataUpdateR(dataId,source){
    const q = this.query;
    q.query(`SELECT * FROM news WHERE idNews = ?`,[dataId],source)
    
  }
  // método de actualiza datos a los servicios de mysql
  dataUpdate(dataRow,dataId,source){
    const q = this.query;
    q.query(`UPDATE news set ? where idNews = ?`,[dataRow, dataId],source);
    
  }
  // método de elimina datos a los servicios de mysql
  dataDelete(data,source){
    const q = this.query;
    q.query(`DELETE FROM news WHERE idNews = ?`,[data],source)
  }
}
  // const modal = new dataModal();
  // console.log(modal.dataRead());
  
module.exports=dataModal;