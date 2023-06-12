import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from "cors";
import {route as authRoute} from './routes/AuthRoute';
import {route as categoryRoute} from './routes/CategoryRoute';
import Database from './config/database';

const app: Application = express();

const {MONGO_URI} = process.env;

Database.databaseConnect(MONGO_URI!);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRoute);
app.use(categoryRoute);

export default app;