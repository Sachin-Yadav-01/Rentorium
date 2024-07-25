import mongooose from "mongoose";

const connectDB = async () => {
  try {
    await mongooose.connect(process.env.MONGO_URI);
    console.log("DB Connected ");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export { connectDB };
