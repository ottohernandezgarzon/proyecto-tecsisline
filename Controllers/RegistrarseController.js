const model = require('../Models/model')

' use strict '

// Recursos
const user=require('../Models/model').user,
files = require('path').join,
fs = require('fs'),
imagePath= files(__dirname, '../public/img/photo')

class RegistrarseController{
  index(){
    let index =(req,res)=>{
      res.render('paginas view/login/registrar');
    }
    return index;
  }
  create() {
		let create = (req, res) => {
      /*direction.belongsTo(user)
      user.hasMany(direction)
      user.create({
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        tipoDocumentoId:req.body.tipoDocumento,
        documento:req.body.documento,
        fotoPerfil:fs.readFileSync(imagePath +'/'+req.file.filename,'base64'),
        formatoFoto:req.file.mimetype,
        nombreUsuario: req.body.primerNombre+' '+req.body.primerApellido,
        correo: req.body.email,
        contraseña: req.body.password,
        genero:req.body.genero,
        telefone: req.body.telephone,
        rolesId:3,
        pais: req.body.country,
        direcciones: {
          direccion: req.body.direction,
          codiogoPostal: req.body.codiogoPostal
        }
      }, {
        include: [direction]
      }).then(()=>{
        fs.unlinkSync(imagePath +'/'+req.file.filename,'base64')
        res.redirect('/inicio')
      })*/

      console.log(req.body);
      let usuario = `${req.body.primerNombre} ${req.body.primerApellido}`;
      res.send(usuario);
    }
		return create;
	}
}

console.log(user);
const registrarse = new RegistrarseController();
module.exports=registrarse;