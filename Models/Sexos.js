"use strict";
const Conectar = require("./Conectar");

class Sexos extends Conectar {
  tableSexo = this.conectar().sequelize.define(
    "sexos",
    {
      sexo_id: {
        allowNull: false,
        autoincrement: false,
        primaryKey: true,
        type: super.conectar().Sequelize.INTEGER,
      },
      sexo: super.conectar().Sequelize.STRING,
    },
    {
      createdAt: true,
      updatedAt: true,
      modelName: this.tableRoles,
      tableName: "sexos",
    }
  );
}

const sexos = new Sexos().tableSexo;

module.exports = sexos;
