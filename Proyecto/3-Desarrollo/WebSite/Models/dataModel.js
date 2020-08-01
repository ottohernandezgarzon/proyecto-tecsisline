' use strict ';
import dbConnection from "./Database/dbConnection";
class dataModel extends  dbConnection{
  constructor(create, Read,Update,Delete){
    let Create ='INSERT INTO SET?';
      create=Create;

    Read ='SELECT * FROM  table ';
    Update = 'UPDATE table SET column= nameColumn WHERE  colum=idColumn',
    Delete = ' DELETE FROM table WHERE column = nameColumn';
   super(); 
  }
}