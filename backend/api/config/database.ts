import mongoose from "mongoose";


class Database{

    static databaseConnect = async (MONGO_URI: string): Promise<void> => {
        await mongoose.connect(MONGO_URI)
            .then(() => {
                console.log("Successfully connected to database");
            })
            .catch((error) => {
                console.log("Database connectio0n failed exiting now...");
                console.error(error);
                process.exit(1);
            });
    }
}

export default Database;