import express from "express";
import corsConfig from "./modules/CorsConfig";
import path from 'path';
import { v1Routes, adminRouter } from './modules/Routers';
import dotenv from 'dotenv';
import errorHandler from "./modules/Models/ErrorHadler";
dotenv.config({ path: './.env' });

const port = process.env.SERVER_PORT
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(corsConfig);
server.use(express.static(path.join(__dirname, '../src/public')));


adminRouter(server);
v1Routes(server);

server.use(errorHandler);

server.listen(port, () => {
    console.log(`port starting on port: ${port}`);
})
