"use strict"
const { Conectar, DataTypes } = require("./Conectar"),
  tipoDocumento = require("./TipoDocumento"),
  sexos = require("./Sexos"),
  { direcciones } = require("./Direcciones"),
  roles = require("./Roles")

class Usuario extends Conectar {
  tableUsuario = this.conectar().sequelize.define(
    "usuario",
    {
      no_documento: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: this.conectar().Sequelize.INTEGER,
        unique: true,
      },
      primer_nombre: DataTypes.STRING,
      segundo_nombre: DataTypes.STRING,
      primer_apellido: DataTypes.STRING,
      segundo_apellido: DataTypes.STRING,
      segundo_apellido: DataTypes.STRING,
      nombre_usuario: DataTypes.STRING,
      foto_perfil: DataTypes.BLOB("long"),
      formato_foto: DataTypes.STRING,
      telefono: DataTypes.BIGINT,
      pais: DataTypes.STRING,
      correo: DataTypes.STRING,
      contraseña: DataTypes.STRING,
      rol_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "roles",
          key: "rol_id",
        },
        onUpdate: "cascada",
        onDelete: "cascada",
        unique: true,
      },
      sexo_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "sexo",
          key: "sexo_id",
        },
        onUpdate: "cascada",
        onDelete: "cascada",
        unique: true,
      },
      tipo_documento_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "tipo_documentos",
          key: "tipo_documento_id",
        },
        onUpdate: "cascada",
        onDelete: "cascada",
        unique: true,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      modelName: "usuario",
      tableName: "usuarios",
    }
  )

  association() {
    const usuarios = this.tableUsuario
    usuarios.hasMany(direcciones, {
      foreignKey: "no_documento",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
    usuarios.belongsTo(tipoDocumento, {
      foreignKey: "tipo_documento_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
    usuarios.belongsTo(roles, {
      foreignKey: "rol_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
    usuarios.belongsTo(sexos, {
      foreignKey: "sexo_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
  }
}

module.exports = Usuario
