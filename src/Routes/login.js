const login = require("../Controllers/LoginController");
const autenticaseRouter = require("./autenticarse");

const loginRouter = require("express").Router();

loginRouter.get("/login", login.index());

loginRouter.post("/login", login.auth());

loginRouter.use("/login", autenticaseRouter);

module.exports = loginRouter;
