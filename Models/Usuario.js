"use strict";
const Conectar = require("./Conectar"),
  tipoDocumento = require("./TipoDocumento"),
  sexos = require("./Sexos"),
  { direcciones } = require("./Direcciones"),
  roles = require("./Roles");

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
      primer_nombre: this.conectar().Sequelize.STRING,
      segundo_nombre: this.conectar().Sequelize.STRING,
      primer_apellido: this.conectar().Sequelize.STRING,
      segundo_apellido: this.conectar().Sequelize.STRING,
      segundo_apellido: this.conectar().Sequelize.STRING,
      nombre_usuario: this.conectar().Sequelize.STRING,
      foto_perfil: this.conectar().Sequelize.BLOB("long"),
      formato_foto: this.conectar().Sequelize.STRING,
      telefono: this.conectar().Sequelize.BIGINT,
      pais: this.conectar().Sequelize.STRING,
      correo: this.conectar().Sequelize.STRING,
      contraseña: this.conectar().Sequelize.STRING,
      rol_id: {
        type: this.conectar().Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "rol_id",
        },
        onUpdate: "cascada",
        onDelete: "cascada",
        unique: true,
      },
      sexo_id: {
        type: this.conectar().Sequelize.INTEGER,
        references: {
          model: "sexo",
          key: "sexo_id",
        },
        onUpdate: "cascada",
        onDelete: "cascada",
        unique: true,
      },
      tipo_documento_id: {
        type: this.conectar().Sequelize.INTEGER,
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
  );
  createInsert(
    documento,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    nombreUsuario,
    fotoPerfil,
    formatoFoto,
    correo,
    contraseña,
    tel,
    pais,
    direccion,
    codigoPostal,
    rolesId,
    sexoId,
    tipoDocumentoId
  ) {
    this.tableUsuario.hasMany(direcciones, {
      foreignKey: "no_documento",
    });
    let createTable = this.tableUsuario.create(
      {
        no_documento: documento,
        primer_nombre: primerNombre,
        segundo_nombre: segundoNombre,
        primer_apellido: primerApellido,
        segundo_apellido: segundoApellido,
        nombre_usuario: nombreUsuario,
        foto_perfil: fotoPerfil,
        formato_foto: formatoFoto,
        telefono: tel,
        pais: pais,
        correo: correo,
        contraseña: contraseña,
        rol_id: rolesId,
        sexo_id: sexoId,
        tipo_documento_id: tipoDocumentoId,
        direcciones: {
          direccion: direccion,
          codigo_postal: codigoPostal,
        },
      },
      {
        include: [direcciones],
      }
    );

    return createTable;
  }
  readSelect() {
    this.tableUsuario.belongsTo(tipoDocumento, {
      foreignKey: "tipo_documento_id",
    });
    this.tableUsuario.belongsTo(roles, {
      foreignKey: "rol_id",
    });
    this.tableUsuario.belongsTo(sexos, {
      foreignKey: "sexo_id",
    });

    this.tableUsuario.hasMany(direcciones, {
      foreignKey: "no_documento",
    });

    let readTable = this.tableUsuario.findAll({
      attributes: [
        "no_documento",
        "tipo_documento_id",
        "primer_nombre",
        "segundo_nombre",
        "primer_apellido",
        "segundo_apellido",
        "nombre_usuario",
        "foto_perfil",
        "formato_foto",
        "telefono",
        "correo",
        "pais",
        "contraseña",
      ],
      include: [
        {
          model: tipoDocumento,
          attributes: ["tipo_documento"],
          required: true,
        },
        {
          model: roles,
          attributes: ["rol"],
          required: true,
        },
        {
          model: sexos,
          attributes: ["sexo"],
          required: true,
        },
        {
          model: direcciones,
          attributes: ["direccion", "codigo_postal"],
          required: true,
        },
      ],
    });
    return readTable;
  }
  readSelectAtr(atr) {
    this.tableUsuario.belongsTo(tipoDocumento, {
      foreignKey: "tipo_documento_id",
    });
    this.tableUsuario.belongsTo(sexos, {
      foreignKey: "sexo_id",
    });
    this.tableUsuario.hasMany(direcciones, {
      foreignKey: "no_documento",

      foreignKeyConstraint: true,
    });
    direcciones.belongsTo(this.tableUsuario);
    let readTable = this.tableUsuario.findOne({
      attributes: [
        "no_documento",
        "tipo_documento_id",
        "primer_nombre",
        "segundo_nombre",
        "primer_apellido",
        "segundo_apellido",
        "nombre_usuario",
        "foto_perfil",
        "formato_foto",
        "telefono",
        "correo",
        "pais",
        "contraseña",
      ],
      include: [
        {
          model: tipoDocumento,
          attributes: ["tipo_documento_id", "tipo_documento"],
          required: true,
        },
        {
          model: sexos,
          attributes: ["sexo_id", "sexo"],
          required: true,
        },
        {
          model: direcciones,
          attributes: ["direccion", "codigo_postal"],
          foreignKey: "no_documento",
          required: true,
        },
      ],
      where: { primer_nombre: atr },
    });
    return readTable;
  }
  updateUpdate(
    documento,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    nombreUsuario,
    fotoPerfil,
    formatoFoto,
    correo,
    contraseña,
    tel,
    pais,
    direccion,
    codigoPostal,
    rolesId,
    sexoId,
    tipoDocumentoId
  ) {
    this.tableUsuario.hasMany(direcciones, {
      foreignKey: "no_documento",
      foreignKeyConstraint: true,
      constraints: true,
      sourceKey: "tipo_documento_id",
      scope: {
        where: {
          updated: true,
        },
      },
    });
    let updateTableUsuario = this.tableUsuario.update(
      {
        no_documento: documento,
        primer_nombre: primerNombre,
        segundo_nombre: segundoNombre,
        primer_apellido: primerApellido,
        segundo_apellido: segundoApellido,
        nombre_usuario: nombreUsuario,
        foto_perfil: fotoPerfil,
        formato_foto: formatoFoto,
        telefono: tel,
        correo: correo,
        contraseña: contraseña,
        pais: pais,
        sexo_id: sexoId,
        rol_id: rolesId,
      },
      {
        where: { no_documento: documento },
      }
    );
    return updateTableUsuario;
  }
  deleteDelete(documento) {
    direcciones.belongsTo(this.tableUsuario, {
      foreignKey: "no_documento",
      targetKey: "tipo_documento_id",
      foreignKeyConstraint: false,
      constraints: false,
    });
    this.tableUsuario.hasMany(direcciones, {
      onDelete: "cascada",
      scope: {
        where: {
          deleted: true,
        },
      },
      foreignKey: "no_documento",
      sourceKey: "tipo_documento_id",
      foreignKeyConstraint: false,
      constraints: false,
    });
    direcciones.belongsTo(this.tableUsuario);
    const deleted = direcciones.destroy({
      cascade: true,
      where: {
        no_documento: documento,
      },
    });
    return deleted;
  }
}

module.exports = Usuario;
