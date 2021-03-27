import express from 'express';
const routes = express.Router();
import OperatorController from '../src/app/controller/operator_controller';


routes.get("/", function(req, res) {
  return res.send("Rota estabelecida");
});

routes.get("/operators", OperatorController.index);

routes.post("/operators", OperatorController.store);

routes.delete("/operators/:id", OperatorController.delete);

routes.put("/operators/:id", OperatorController.update);

module.exports = routes;