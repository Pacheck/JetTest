import dotenv from 'dotenv';
dotenv.config();
import aws from 'aws-sdk';

// const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;


let s3 = new aws.S3({
  databaseURI: process.env.DATABASE_URI,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
});

console.log(s3.databaseURI, s3.databaseUser);

// DATABASE_USER=pacheck
// DATABASE_PASSWORD=qaro41kine
// DATABASE_URI=operadores.dy2uj.mongodb.net/operators

// module.exports = { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` };
// export default { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}` }
export default { URI : 'test'}