import express from 'express';
import MongoDB from './src/database/mongoose_config';
import { connect } from 'mongoose';

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(process.env.PORT || 3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  database() {
    console.log(MongoDB.URI);
    connect(MongoDB.URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('DB Connected!')).catch(err => console.log(err))
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes/routes"));
  }
}

module.exports = new App().express;