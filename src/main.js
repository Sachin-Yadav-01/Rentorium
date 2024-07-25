import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectDB } from "./model/dbConnection.js";
import { router } from "./routes/userRoutes.js";
// import * as moment from 'moment'
dotenv.config();
connectDB();

// console.log(moment())
const app = express();
app.use(express.json());
app.use(urlencoded());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
