const { Router } = require("express");

const usersRouter = require("./users.routes");
const contasRouter = require("./contas.routes");

const routes = Router();

routes.use("/users", usersRouter)
routes.use("/contas", contasRouter)

module.exports = routes;