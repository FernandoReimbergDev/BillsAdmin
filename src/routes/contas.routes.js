const { Router } = require("express");

const ContasController = require("../controllers/ContasController");

const contasRoutes = Router();


const contasController = new ContasController();

contasRoutes.get("/", contasController.index);
contasRoutes.post("/:user_id", contasController.create);
contasRoutes.get("/:id", contasController.show);
contasRoutes.delete("/:id", contasController.delete);
contasRoutes.put("/:id", contasController.update);


module.exports = contasRoutes;
