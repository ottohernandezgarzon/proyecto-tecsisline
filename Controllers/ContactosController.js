' use strict '


// Recursos
class ContactosController  {
  index() {
    let index = (req, res) => {
      res.render('paginas view/contactos/contactos',{pretty:true})
    }
    return index;
  }
}
const contactos = new ContactosController();
module.exports = contactos;