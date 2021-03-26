import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;
console.log('mongoose config #######', DATABASE_USER, DATABASE_URI)

// module.exports = { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` };
export default { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` }