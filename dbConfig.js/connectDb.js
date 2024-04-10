import mongoose from "mongoose";

let isConnected = false;

export const ConnectDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("database already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "porfolio",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("db connected.....");
  } catch (error) {
    console.log(error);
  }
};
