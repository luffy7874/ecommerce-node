import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from "cors";
import {route as adminRoute} from './routes/admin';
import Database from './config/database';

const app: Application = express();
dotenv.config();

const {MONGO_URI} = process.env;

Database.databaseConnect(MONGO_URI!);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(adminRoute);

export default app;