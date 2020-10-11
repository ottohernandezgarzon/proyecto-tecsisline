' use strict '
// Recursos
const {
  user,
  direction
} = require('../Models/model')

// Clase PerfilController con herencia a PerfilModel
class PerfilController {
  index() {
    let index = (req, res) => {
      user.hasMany(direction)
      direction.belongsTo(user)
      user.findAll({
        include: {
          model: direction,
          required: true
        }
      }).then((data) => {
        console.log(data);
        res.render('paginas view/perfil/perfiles', {
          pretty: true,
          rows: data
        })
      })
    }
    return index;
  }
  create(){
    let create=(req,res)=>{
      direction.belongsTo(user)
      user.hasMany(direction)
      user.create({})
    }
    return create
  }
}
const perfil = new PerfilController();
module.exports = perfil;