import express from 'express';
const routes = express.Router();
// import OperatorModel from '../src/app/model/operator';
import OperatorController from '../src/app/controller/operator_controller';


routes.get("/", function(req, res) {
  return res.send("Rota estabelecida");
});

routes.get("/operators", OperatorController.index);

routes.post("/operators", OperatorController.store)

module.exports = routes;