import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB = async (cb) => {
  try {
    console.log("Connection URL:", process.env.MONGODB_URI);
    mongoose.set("strictQuery", true); // To suppress deprecation warning
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
    cb();
  } catch (e) {
    console.log("Error connecting to MongoDB:", e.message);
  }
};

export { connectToDB };
