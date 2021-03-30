import express from 'express';
import cors from 'cors';
import csv from 'csv-parser';
import fs from 'fs';
import MongoDB from './src/database/mongoose_config';
import { connect } from 'mongoose';
import Clients from './src/app/model/client';
class App {
  constructor() {
    this.express = express();
    this.allClients = [];

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(process.env.PORT || 3001);
  }

  async importCSV() {
    console.log('importing csv file..');

    fs.createReadStream('./assets/mockdata.csv')
    .pipe(csv({}))
    .on('data', (data) => this.allClients.push(data))
    .on('end', () => this.LoadAndSaveCSV());
    
  }

  async LoadAndSaveCSV(){
    const currentClientsAtDB = await Clients.find({});
    if(currentClientsAtDB.length <= 0){
      this.allClients.forEach(async(client) => {
        await Clients.create(client);
      })
    }
  }

  async database() {
    await connect(MongoDB.URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('DB Connected!')).catch(err => console.log(err));
    this.importCSV();
  }

  middlewares() {
    this.express.use(cors())
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes/routes"));
  }
}

module.exports = new App();