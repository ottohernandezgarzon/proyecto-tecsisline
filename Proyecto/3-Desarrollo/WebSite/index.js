'use strict'
 const express = require('express'),
  app = express(),
  port = 3000;
  app.set('view engine', 'pug')
 
app.get('/', (req, res) => {
  res.render('index')

})
   .listen(port, () => console.log(`Example app listening on port port!`))