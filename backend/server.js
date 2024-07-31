import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import FoodRoutes from "./routes/Foods.js";
const app = express();
env.config()
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/Food',FoodRoutes)

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
