import csv from 'csv-parser';
import fs from 'fs';
import { connect, connection, model } from './database/mongoose_connection';

connect('mongodb+srv://pacheck:qaro41kine@operadores.dy2uj.mongodb.net/kitty', 
{useNewUrlParser: true, useUnifiedTopology: true});

connection.once('open', () => console.log('connected!')).on('error', err => console.log('Error', err))

const Cat = model('Cat', { name: String, age: String });

const handleFindName = (res) => {
    if(res.length > 0){
        console.log(res)
    }else{
        console.log('Não foi encontrado!')
    }
}

Cat.find({ age: /^7 years/}).then(handleFindName).catch(err => console.log(err));

// const kitty = new Cat({ name: 'Negão', age: '2 years' });
// kitty.save().then(() => console.log('meow')).catch(err => console.log(err));

// const results = [];

// fs.createReadStream('./assets/mockdata.csv')
// .pipe(csv({}))
// .on('data', (data) => results.push(data))
// .on('end', () => console.log(results));
