" use strict ";
const app = require("./src/app");
const PORT = process.env.PORT | 3000 | 8080 | 80;

// configuración de los recursos o paquetes
app.listen(PORT, () =>
  console.log("Listo en  la Link: http://localhost:" + PORT)
);
