" use strict ";
const app = require("./src/app");
const port = process.env.PORT ?? 80 | 8080 | 3000;

// configuración de los recursos o paquetes
app.listen(port, () =>
  console.log("Listo en  la Link: http://localhost:" + port)
);
