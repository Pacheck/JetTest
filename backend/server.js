import express from 'express';
import database from './src/database/mongoose_connection';
import { connect } from 'mongoose';

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    // .listen(process.env.PORT || 5000)

    this.express.listen(process.env.PORT || 3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  database() {
    console.log(database.URI)
    connect(database.URI, { useNewUrlParser: true, useUnifiedTopology: true  });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes/routes"));
  }
}

module.exports = new App().express;