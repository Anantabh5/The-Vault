import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
//const mongoose = require('mongoose')
const connection = {};
export default async function connectDb() {
    if (connection.isConnected) {
        // Use existing database connection
        console.log("Using existing connection");
        return;
    }
    // Use new database connection
    try{
        const mongourl = process.env.DB_CONN_STRING;

        const db =await mongoose.connect(mongourl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                //useCreateIndex: true,
                //useFindAndModify: false,
                //useNewUrlParser: true,
                //useUnifiedTopology: true,

                serverSelectionTimeoutMS: 30000,

            });
        connection.isConnected = db.connections[0].readyState;
        console.log("DB Connected:", connection.isConnected);
        return connection


    }
    catch(err){

        console.log(err);
    }

}

