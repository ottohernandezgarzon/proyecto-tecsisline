' use strict'
const
  path =require('path'),
  pathJoin =require('path').join,
  multer = require('multer')



const storage= multer.diskStorage({
  destination: pathJoin(__dirname,'../public/img/photo/upload'),
  filename: (req, file,cb)=>{
    cb(null,file.originalname)
  },
}),
fileFilter = (req,file,caLlBack)=>{
  let fileType, mimetype,extname
  fileType =/jpeg|jpg|png/
  mimetype = fileType.test(file.mimetype)
  extname = fileType.test(path.extname(file.originalname).toLowerCase())
  if(mimetype && extname)
  { return caLlBack(null,true) }
  cb('Error: File upload only supports the following filetypes - " + filetypes')
}

module.exports = multer({
  storage,
  fileFilter,
  limits:{fileSize:50000000},

}).single('imagen')
