' use strict '
const usuarios = (sequelize, DataTypes) => {
  const user = sequelize.define("usuarios", {
    
    documento:{
      type: DataTypes.INTEGER
    },
    primerNombre:{
      type: DataTypes.STRING(50)
    },
    segundoNombre:{
      type: DataTypes.STRING(50)
    },
    primerApellido:{
      type: DataTypes.STRING(50)
    },
    segundoApellido:{
      type: DataTypes.STRING(50)
    },
    nombreUsuario:{
      type: DataTypes.STRING(50)
    },
    genero:{
      type: DataTypes.ENUM('Masculino','Femenino','Otro')
    },
    pais:{
      type: DataTypes.STRING(50)
    },
    fotoPerfil: {
      type: DataTypes.BLOB("long"),
    },
    formatoFoto:{
      type:DataTypes.STRING(50)
    },
    telefono: {
      type: DataTypes.INTEGER(10)
    },
    correo:{
      type:DataTypes.STRING(50)
    },
    contraseña:{
      type:DataTypes.STRING(50)
    },
    rolesId:{
      type:DataTypes.INTEGER
    },
    tipoDocumentoId:{
      type:DataTypes.INTEGER
    },
  });
  return user;
};

module.exports =usuarios;