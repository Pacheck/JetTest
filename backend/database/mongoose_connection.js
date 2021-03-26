import { connect, connection, model } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;

connect(`mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}`, 
{useNewUrlParser: true, useUnifiedTopology: true});

connection
.once('open', () => console.log('connected!'))
.on('error', err => console.log('Error', err));

module.exports = { model };