import mongose from "mongoose";

const connectDb = async () => {
  try {
    await mongose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;
