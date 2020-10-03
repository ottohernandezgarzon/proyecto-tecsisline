' use strict '
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("imagen", {
    foto: {
      type: DataTypes.BLOB("long"),
    },
    tipo_image:{
      type:DataTypes.STRING
    },
    texts: {
      type: DataTypes.STRING
    },
  });
  return Image;
};
//  configurar la  base de datos