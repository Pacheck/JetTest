import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;

module.exports = { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` };