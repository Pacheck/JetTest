import express from 'express';
const routes = express.Router();
import OperatorController from '../src/app/controller/operator_controller';
import ClientController from '../src/app/controller/client_controller';

routes.get("/", function(req, res) {
  return res.send("Rota estabelecida");
});

routes.get("/operators", OperatorController.index);

routes.get("/operators/:id", OperatorController.indexOne);

routes.post("/operators", OperatorController.store);

routes.delete("/operators/:id", OperatorController.delete);

routes.put("/operators/:id", OperatorController.update);

routes.get("/clients", ClientController.index);

routes.post("/clients", ClientController.store);

routes.delete("/clients/:id", ClientController.delete);

routes.put("/clients/:id", ClientController.update);

module.exports = routes;