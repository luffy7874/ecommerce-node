import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
dotenv.config();

app.get("/test", (req:Request, res:Response):void => {
    res.status(302).redirect("/api");
});

app.get("/api", (req:Request, res:Response):void => {
    res.status(403).json({"msg" : "your should not be here Hehe :)"});
});


export default app;