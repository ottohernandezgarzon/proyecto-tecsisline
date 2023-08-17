"use strict";
const Conectar = require("./Conectar");

class Roles extends Conectar {
  tableRoles = super.conectar().sequelize.define(
    "roles",
    {
      rol_id: {
        allowNull: false,
        autoincrement: false,
        primaryKey: true,
        type: super.conectar().Sequelize.INTEGER,
      },
      rol: super.conectar().Sequelize.STRING,
    },
    {
      createdAt: true,
      updatedAt: true,
      modelName: this.tableRoles,
      tableName: "roles",
    }
  );
}

const roles = new Roles().tableRoles;

module.exports = roles;
