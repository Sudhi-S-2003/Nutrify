import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import FoodRoutes from "./routes/Foods.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import cors from 'cors'
const app = express();
env.config()
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/Food',FoodRoutes)
// Use authentication routes
app.use('/Account', AuthRoutes);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});

mongoose
  .connect(process.env.MOOGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
