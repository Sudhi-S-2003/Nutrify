import mongoose from 'mongoose';

const FoodTrackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true }, // Reference to the food item
  quantity: { type: Number, required: true }, // Quantity of the food item consumed
  date: { type: Date, required: true, default: Date.now },
});

// Create the FoodTrack model
const FoodTrackModel = mongoose.model('FoodTracks', FoodTrackSchema);

export default FoodTrackModel;
