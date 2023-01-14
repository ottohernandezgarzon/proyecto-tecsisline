" use strict ";
// Recursos
const Usuario = require("../Models/Usuario");
// const user=require('../Models/Model'),
(files = require("path").join),
  (fs = require("fs")),
  (imagePath = files(__dirname, "../public/img/photo"));

class RegistrarseController extends Usuario {
  index() {
    let index = (req, res) => {
      res.render("paginas view/login/registrar", { pretty: true });
    };
    return index;
  }
  create(
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
    let create = (req, res) => {
      primerNombre = req.body.primerNombre;
      segundoNombre = req.body.segundoNombre;
      primerApellido = req.body.primerApellido;
      segundoApellido = req.body.segundoApellido;
      tipoDocumentoId = req.body.tipoDocumento;
      documento = req.body.documento;
      fotoPerfil =
        /* fs.readFileSync(imagePath +'/'+req.file.filename,'base64') ||*/ req
          .body.foto;
      formatoFoto = /* req.file.mimetype|| */ req.body.fotoPath;
      nombreUsuario = req.body.primerNombre + " " + req.body.primerApellido;
      correo = req.body.email;
      contraseña = req.body.password;
      tel = req.body.telephone;
      pais = req.body.country;
      direccion = req.body.direction;
      codigoPostal = req.body.codigoPostal;
      sexoId = req.body.sexo;
      rolesId = 3;
      this.createInsert(
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
      )
        .then(() => {
          console.info("Se creado un nuevo registros exitosamente");
          res.redirect("/tables");
        })
        .catch((er) => {
          console.error(`Error al registrar \n${er}`);
          res.send("error al insertar");
        });
    };

    return create;
  }
  read() {
    let read = (req, res) => {
      super
        .readSelect()
        .then((datos) => {
          console.log(datos);
          res.send(datos);
        })
        .catch((er) => {
          console.error(er);
        });
    };

    return read;
  }
}

const registrarse = new RegistrarseController();
module.exports = registrarse;
