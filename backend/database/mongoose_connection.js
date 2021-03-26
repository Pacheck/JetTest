import { connect, connection, model } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD } = process.env;

connect(`mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@operadores.dy2uj.mongodb.net/kitty`, 
{useNewUrlParser: true, useUnifiedTopology: true});

connection
.once('open', () => console.log('connected!'))
.on('error', err => console.log('Error', err));

module.exports = { model };