import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI);

    console.log("> Database successfully connected!");
  } catch (error) {
    console.error(error);
  }
}

export default connectToDatabase;
