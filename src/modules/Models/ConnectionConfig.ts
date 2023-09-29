import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const sqlConnectionConfig = {
host: process.env.HOST,
user: String(process.env.LOGIN),
port: Number(process.env.PORT_SQL),
password: String(process.env.PASSWORD),
database: String(process.env.DATABASE_NAME),
}




export default sqlConnectionConfig