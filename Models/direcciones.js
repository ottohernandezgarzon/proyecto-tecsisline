const Conectar = require("./Conectar");

class Direcciones extends Conectar {
  TableDirection = super.conectar().sequelize.define(
    "direcciones",
    {
      direccion_id: {
        type: super.conectar().Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      direccion: super.conectar().Sequelize.STRING,
      codigo_postal: super.conectar().Sequelize.INTEGER,
      no_documento: {
        type: super.conectar().Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "usuarios",
          key: "no_documento",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        unique: true,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      deletedAt: false,
      tableName: "direcciones",
      modelName: "direcciones",
    }
  );
  get() {
    this.TableDirection;
  }
}

const direcciones = new Direcciones().TableDirection;
module.exports = { direcciones, Direcciones };
