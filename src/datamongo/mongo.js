import mongoose from "mongoose";

async function dbconnection() {
  await mongoose.connect(
    "mongodb+srv://Willy6977:45986917Wil@myproject.iwfviqf.mongodb.net/?retryWrites=true&w=majority"
  );
}

export default dbconnection;
