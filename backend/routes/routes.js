import express from 'express';
const routes = express.Router();
import { model, Schema } from 'mongoose';
import OperatorModel from '../src/app/model/operator';


routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/teste", (req, res) => {
  OperatorModel();
  return res.send('criado')
})

module.exports = routes;