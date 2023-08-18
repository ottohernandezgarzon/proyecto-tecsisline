" use strict ";
// Recursos
const { direcciones } = require("../Models/Direcciones");
const Usuario = require("../Models/Usuario");
(files = require("path").join),
  (fs = require("fs")),
  (imagePath = files(__dirname, "../public/img/photo"));

class DashBoardController extends Usuario {
  data;
  index() {
    const index = (req, res) => {
      res.render("paginas view/dashboard/administrar", {
        pretty: true,
        title: "Administración",
      });
    };
    return index;
  }

  read() {
    let read = (req, res) => {
      this.readSelect()
        .then((newsRows) => {
          let data = newsRows.map((newsRows) => {
            const tipoDocumento = newsRows.getDataValue("tipoDocumento");
            const roles = newsRows.getDataValue("role");
            const sexos = newsRows.getDataValue("sexo");
            const direcciones = newsRows.getDataValue("direcciones");

            return {
              documento: newsRows.dataValues.no_documento,
              tipoDocumento: tipoDocumento.getDataValue("tipo_documento"),
              primerNombre: newsRows.dataValues.primer_nombre,
              segundoNombre: newsRows.dataValues.segundo_nombre,
              primerApellido: newsRows.dataValues.primer_apellido,
              segundoApellido: newsRows.dataValues.segundo_apellido,
              nombreUsuario: newsRows.dataValues.nombre_usuario,
              fotoPerfil: newsRows.dataValues.foto_perfil,
              formatoFoto: newsRows.dataValues.formato_foto,
              telefono: newsRows.dataValues.telefono,
              correo: newsRows.dataValues.correo,
              contraseña: newsRows.dataValues.contraseña,
              pais: newsRows.getDataValue("pais"),
              direccion: direcciones.map((data) =>
                data.getDataValue("direccion")
              ),
              codicoPostal: direcciones.map((data) =>
                data.getDataValue("codigo_postal")
              ),
              sexo: sexos.getDataValue("sexo"),
              rol: roles.getDataValue("rol"),
            };
          });
          console.info("Consulta exitosa");
          res.render("paginas view/dashboard/table", {
            pretty: true,
            newsRows: data,
            nameTable: "Tabla Usuario",
          });
        })
        .catch((er) => {
          console.error(`Error en la consultar\n${er}`);
        });
    };
    return read;
  }
  readArt(nombre) {
    const read = (req, res) => {
      nombre = req.params.primerNombre;
      this.readSelectAtr(nombre)
        .then((newsRows) => {
          const tipoDocumento = newsRows.getDataValue("tipoDocumento");
          const sexos = newsRows.getDataValue("sexo");
          const direcciones = newsRows.getDataValue("direcciones");
          let data = {
            documento: newsRows.dataValues.no_documento,
            tipoDocumentoId: tipoDocumento.getDataValue("tipo_documento_id"),
            primerNombre: newsRows.dataValues.primer_nombre,
            segundoNombre: newsRows.dataValues.segundo_nombre,
            primerApellido: newsRows.dataValues.primer_apellido,
            segundoApellido: newsRows.dataValues.segundo_apellido,
            nombreUsuario: newsRows.dataValues.nombre_usuario,
            fotoPerfil: newsRows.dataValues.foto_perfil,
            formatoFoto: newsRows.dataValues.formato_foto,
            telefono: newsRows.dataValues.telefono,
            correo: newsRows.dataValues.correo,
            contraseña: newsRows.dataValues.contraseña,
            pais: newsRows.getDataValue("pais"),
            direction: direcciones
              .map((data) => data.getDataValue("direccion"))
              .toString(),
            codigoPostal: Math.floor(
              direcciones.map((data) => data.getDataValue("codigo_postal"))
            ),
            sexoId: sexos.getDataValue("sexo_id"),
            sexo: sexos.getDataValue("sexo"),
          };
          console.log(data);
          console.info("Consulta exitosa");
          res.render("paginas view/dashboard/modalTableUsuario", {
            pretty: true,
            newsRows: data,
            nameTable: "Tabla Usuario",
          });
        })
        .catch((er) => {
          console.error(`Error en la consultar\n${er}`);
        });
    };
    return read;
  }

  update(
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
    const update = (req, res) => {
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
      this.updateUpdate(
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
          direcciones.update(
            {
              direccion: direccion,
              codigo_postal: codigoPostal,
              tipo_documento_id: tipoDocumentoId,
            },
            {
              where: {
                no_documento: documento,
              },
            }
          );
          console.info("Actualización es exitosa");
          res.redirect("/tables");
        })
        .catch((err) => {
          console.error("Error al actualizar\n" + err);
        });
    };
    return update;
  }

  delete(id) {
    const deleted = (req, res) => {
      const id = req.params.datos;
      this.deleteDelete(id)
        .then(() => {
          this.tableUsuario.destroy({ where: { no_documento: id } });
          console.info("Registro eliminado exitosamente");
          res.redirect("/tables");
        })
        .catch((err) => {
          console.error(`Error al eliminar el registro \n${err}`);
        });
    };
    return deleted;
  }
}

const dashboard = new DashBoardController();
module.exports = dashboard;
