"use strict";
const Conectar = require("./Conectar");

class TipoDocumento extends Conectar {
  tableTipoDocumento = this.conectar().sequelize.define(
    "tipoDocumento",
    {
      tipo_documento_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: this.conectar().Sequelize.INTEGER,
      },
      tipo_documento: this.conectar().Sequelize.STRING,
    },
    {
      createdAt: true,
      updatedAt: true,
      modelName: "tipoDocumento",
      tableName: "tipo_documentos",
    }
  );
}
const tipoDocumento = new TipoDocumento().tableTipoDocumento;
module.exports = tipoDocumento;
