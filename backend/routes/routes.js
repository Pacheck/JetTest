import express from 'express';
const routes = express.Router();

routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/teste", (req, res) => {
  console.log('teste')
  return res.send("TEstando")
})

module.exports = routes;