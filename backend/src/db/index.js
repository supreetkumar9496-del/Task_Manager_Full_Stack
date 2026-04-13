import mongoose from "mongoose";
import { DBNAME } from "../constants/constants.js";
import dns from 'dns';

dns.setServers(["1.1.1.1", "8.8.8.8"]);


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
    console.log("Connected with MONGODB: ",connectionInstance.connection.host);
  } catch (error) {
    console.log("MONGDB Connection error", error);
    process.exit(1)
  }
}

export default connectDB





/*
import express from "express"
const app = express()

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error
    })


    app.listen(process.env.PORT, () => {
      console.log(`App is listening ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("Error: ", error)
    throw error
  }
})

*/