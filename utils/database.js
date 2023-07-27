import mongoose from "mongoose";

let isConnected = false;

export const connectToMongoDB = async () => {
  if (isConnected) {
    console.log("MongoDB already is connected");
    return;
  }

  try {
    mongoose.connect(
      // here add your MongoDB database path
      {
        dbName: // here write the name of the database
      }
    );

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
