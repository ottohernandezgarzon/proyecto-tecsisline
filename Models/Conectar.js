const { sequelize, Sequelize } = require("sequelize"),
  data = require('./Database/configConnection.json');
class Conectar {
  #hosts = data.HOST;
  #user = data.USER;
  #password = (!null) ?"":data.PASSWORD;
  #db = data.DB;
  #dialect = data.dialect;
  #pool = {
    max: data.pool.max,
    min: data.pool,
    acquire: data.pool.acquire,
    idle: data.pool.idle,
  };
  conectar() {
    const sequelize = new Sequelize(this.#db, this.#user, this.#password, {
        host: this.#hosts,
        dialect: this.#dialect,
        acquire: this.#pool.acquire,
        idle: this.#pool.idle,
      }),
      dataBase = {};
    dataBase.Sequelize = Sequelize;
    dataBase.sequelize = sequelize;
    return dataBase;
  }
}
// const Conectar =new conectar();
module.exports = Conectar;
