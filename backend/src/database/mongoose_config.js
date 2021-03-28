import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;

export default { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` }
// export default { URI: `mongodb+srv://pacheck:qaro41kine@operadores.dy2uj.mongodb.net/operators` }