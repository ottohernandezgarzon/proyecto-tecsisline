const nodemailer = require("nodemailer");
const config = require("../../configuration/config.json");
const setting = config.email;

const transporter = nodemailer.createTransport({ ...setting });
// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(_to, _subject, template) {
  try {

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `Dev <ohernandezgarzon@gmail.com>`, // sender address
      to: `${_to}`, // list of receivers
      subject: `${_subject}`, // Subject line
      html: template, // html body
    });
    console.log("Message sent: %s", info.messageId);

  } catch (error) {
    console.error(error);
  }
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
module.exports = sendEmail;
