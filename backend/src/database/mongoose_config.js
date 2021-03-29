import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URI } = process.env;

export default { URI: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URI}?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true`}