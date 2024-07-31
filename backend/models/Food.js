import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
  Food: String,
  Measure: String,
  Grams: Number,
  Calories: Number,
  Protein: Number,
  Fat: Number,
  SatFat: Number, 
  Fiber: Number,
  Carbs: Number,
  Category: String,
  image: String,
});
const FoodModel=mongoose.model("Foods",FoodSchema)
export default FoodModel