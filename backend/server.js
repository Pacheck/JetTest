import express from 'express';
import csv from 'csv-parser';
import fs from 'fs';
import MongoDB from './src/database/mongoose_config';
import { connect } from 'mongoose';
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
    .on('end', () => this.LoadAndSaveSVG());
    
  }

  async LoadAndSaveSVG(){
    this.allClients.forEach(async(client) => {
      await Clients.create(client);
    })
    // if(operators.length > 0){
    //   console.log('loading data..')
    //   let clientsCounter = 0;
    //   let operatorsCounter = 0;

    //   while(true){
    //     if(clientsCounter >= this.allClients.length){
    //         break;
    //     }

    //     if(operatorsCounter == operators.length){
    //         operatorsCounter = 0;
    //     }
        
    //     operators[operatorsCounter].clients.push(this.allClients[clientsCounter]);
        

    //     clientsCounter++;
    //     operatorsCounter++;
    //   }
    //   return this.updateDataBase(operators);
    // }
  }

  async database() {
    await connect(MongoDB.URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('DB Connected!')).catch(err => console.log(err));
    this.importCSV();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes/routes"));
  }
}

module.exports = new App();