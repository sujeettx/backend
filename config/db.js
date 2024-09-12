import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
 export const connectDb = async () => {
    try {
      const connect = await mongoose.connect(process.env.MONGO_URI);
      console.log("Server is Connected to Database");
    } catch (err) {
      console.log("Server is NOT connected to Database", err.message);
    }
  };

  