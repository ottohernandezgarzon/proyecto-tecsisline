" use strict "
const { request, response } = require("express")
// Recursos

const Usuario = require("../Models/Usuario")
const { direcciones } = require("../Models/Direcciones")

// ;(files = require("path").join),
//   (fs = require("fs")),
//   (imagePath = files(__dirname, "../public/img/photo"))
class RegistrarseController extends Usuario {
  index(req = request, res = response) {
    res.render("paginas view/login/registrar", { pretty: true })
  }

  async create(req = request, res = response) {
    direcciones.belongsTo(usuario, {
      foreignKey: "no_documento",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      constraints: true,
      foreignKeyConstraint: true,
    })
    usuario.hasMany(direcciones, {
      foreignKey: "no_documento",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      constraints: true,
      foreignKeyConstraint: true,
    })
    const data = {
      no_documento: req.body.documento,
      primer_nombre: req.body.primerNombre,
      segundo_nombre: req.body.segundoNombre,
      primer_apellido: req.body.primerApellido,
      segundo_apellido: req.body.segundoApellido,
      nombre_usuario: req.body.primerNombre + " " + req.body.primerApellido,
      tipo_documento_id: req.body.tipoDocumento,
      fotoPerfil:
        /* fs.readFileSync(imagePath +'/'+req.file.filename,'base64') ||*/ req
          .body.foto,
      formatoFoto: /* req.file.mimetype|| */ req.body.fotoPath,
      correo: req.body.email,
      contraseña: req.body.password,
      tel: req.body.telephone == "" ? null : req.body.telephone,
      pais: req.body.country,
      sexo_id: !req.body.sexo >= 0 ? 4 : req.body.sexo,
      rol_id: 3,
      direcciones: {
        direccion: req.body.direction,
        codigo_postal:
          req.body.codigoPostal == "" ? null : req.body.codigoPostal,
      },
    }
    try {
      console.log("usuarios :>> ", usuario)
      const dataSQL = await usuario.create(data, {
        include: [direcciones],
      })
      // res.redirect("/tables")
      console.log("data :>> ", data)
      console.log("dataSQL :>> ", dataSQL)
      res.status(200).json({
        menage: "Se inserto un usuario a la base de datos",
        registro: data,
        insert: dataSQL,
      })
    } catch (er) {
      console.error("error :>> ", er)
      res.status(405).send("No se inserto dato del usuario")
    }
  }
  read() {
    let read = (req, res) => {
      super
        .readSelect()
        .then(datos => {
          console.log(datos)
          res.send(datos)
        })
        .catch(er => {
          console.error(er.message)
        })
    }

    return read
  }
}

const registrarse = new RegistrarseController()
module.exports = registrarse
