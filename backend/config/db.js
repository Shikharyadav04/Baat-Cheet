import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Successfully Connected to Database !!!");
  } catch (error) {
    console.log("Error connecting to Database  ", error.message);
  }
};

export default connectDb;
