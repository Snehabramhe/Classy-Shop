import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

/**
 * connect to MongoDB Database
 */
const mongoDBUrl = process.env.MONGODB_URL;
const database = process.env.MONGO_DATABASE;

if (!mongoDBUrl || !database) {
    throw new Error(
        "Please provide MONGODB_URL in the .env file");
}

async function connectDB() {
    try {
        await mongoose.connect(mongoDBUrl, {
            dbName: database
        });
        console.log("Connect DB");
    } catch (error) {
         console.log("MongoDB connect error", error);
         process.exit(1);
    }
}

export default connectDB;