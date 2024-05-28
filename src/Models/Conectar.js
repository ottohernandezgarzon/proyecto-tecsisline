const { Sequelize, DataTypes } = require("sequelize"),
  data = require("./Database/configConnection.json")
class Conectar {
  #hosts = data.HOST
  #user = data.USER
  #password = !null ? "" : data.PASSWORD
  #db = data.DB
  #dialect = data.dialect
  #pool = { ...data.pool }
  conectar() {
    const sequelize = new Sequelize(this.#db, this.#user, this.#password, {
        host: this.#hosts,
        dialect: this.#dialect,
        acquire: this.#pool.acquire,
        idle: this.#pool.idle,
      }),
      dataBase = {}
    dataBase.Sequelize = Sequelize
    dataBase.sequelize = sequelize
    return dataBase
  }
}
// const Conectar =new conectar();
module.exports = { Conectar, DataTypes }
