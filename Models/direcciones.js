
const direcciones =(sequelize,DataTypes)=>{
  const direction = sequelize.define('direcciones',{
    direccion:{
      type:DataTypes.STRING(30),
    },
    codigoPostal:{
      type:DataTypes.INTEGER(6),
    },
    usuarioId:{
      type:DataTypes.INTEGER(20),
    }
  })
  return direction
}
module.exports= direcciones