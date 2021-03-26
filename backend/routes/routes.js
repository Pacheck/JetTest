import express from 'express';
const routes = express.Router();
import { model, Schema } from 'mongoose';

routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/teste", (req, res) => {
  const kittySchema = new Schema({
    name: String,
    age: String,
});

  const Cat = model('Cat', kittySchema);

  const kitty = new Cat({ name: 'Negão', age: '2 years' });
  kitty.save().then(() => console.log('meow')).catch(err => console.log({ err }));

  return res.send('criado')
})

module.exports = routes;