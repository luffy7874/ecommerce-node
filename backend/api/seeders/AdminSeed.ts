import mongoose from "mongoose";
import { hash } from "bcrypt";
import User from "../model/UserModel";
import Database from "../config/database";
import dotenv from 'dotenv';

dotenv.config();

class AdminSeed {
    static async seedDb(){
        const hashPassword: string = await hash("12345678", 12);

        const {MONGO_URI} = process.env;

        Database.databaseConnect(MONGO_URI!);

        const user = await User.create({
            name : "Admin",
            email : "admin@gmail.com",
            phone : 7210210669,
            role : "admin",
            password : hashPassword,
        });

        console.log("DB Seeded");
    }
}

AdminSeed.seedDb().then(() => {
    mongoose.connection.close();
});