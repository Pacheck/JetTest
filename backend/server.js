import express from 'express';
import csv from 'csv-parser';
import fs from 'fs';
import MongoDB from './src/database/mongoose_config';
import { connect } from 'mongoose';

class App {
  constructor() {
    this.express = express();

    this.importCSV();
    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(process.env.PORT || 3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  importCSV() {
    console.log('importing csv file..');

    fs.createReadStream('./assets/mockdata.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => console.log(results));
  }

  database() {
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