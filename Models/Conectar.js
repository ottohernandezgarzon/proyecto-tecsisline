const { sequelize, Sequelize } = require("sequelize");
class Conectar {
  #hosts = "localhost";
  #user = "root";
  #password = "metallica21";
  #db = "tecsisline";
  #dialect = "mysql";
  #pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
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
