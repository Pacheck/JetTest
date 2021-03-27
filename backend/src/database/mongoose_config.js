import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;

// DATABASE_USER=pacheck
// DATABASE_PASSWORD=qaro41kine
// DATABASE_URI=operadores.dy2uj.mongodb.net/operators

export default { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` }