// import csv from 'csv-parser';
// import fs from 'fs';
// import { model, Schema } from 'mongoose';
// //1 - Schema, 2 - Model, 3 - Instance
// const handleFindName = (res) => {
//     if(res.length > 0){
//         console.log(res)
//     }else{
//         console.log('Não foi encontrado!')
//     }
// }

// const kittySchema = new Schema({
//     name: String,
//     age: String,
// });

// const Cat = model('Cat', kittySchema);

// Cat.find({ age: /^7 years/}).then(handleFindName).catch(err => console.log(err));

// const kitty = new Cat({ name: 'Negão', age: '2 years' });
// kitty.save().then(() => console.log('meow')).catch(err => console.log(err));

// const results = [];

// fs.createReadStream('./assets/mockdata.csv')
// .pipe(csv({}))
// .on('data', (data) => results.push(data))
// .on('end', () => console.log(results));
