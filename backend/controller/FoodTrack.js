import FoodTrackModel from "../models/Track.js";
//daily food tracks
const trackFoodConsumption = async (req, res) => {
    try {
      const { userId, foodId, quantity } = req.body;
  
      const foodTrack = new FoodTrackModel({
        userId,
        foodId,
        quantity,
        date:  new Date(),
      });
  
      await foodTrack.save();
      res.status(201).json({ message: 'Food consumption tracked successfully', foodTrack });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  // Fetch food tracks for a specific date
const getFoodTracksByDate = async (req, res) => {
    try {
      const { date } = req.query;
      if (!date) {
        return res.status(400).json({ message: 'Date is required' });
      }
  
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
  
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
  
      const foodTracks = await FoodTrackModel.find({
        date: { $gte: startOfDay, $lte: endOfDay }
      });
  
      res.status(200).json(foodTracks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Fetch food tracks for a date range
  const getFoodTracksByDateRange = async (req, res) => {
    try {
      const { startDate, endDate } = req.query;
      if (!startDate || !endDate) {
        return res.status(400).json({ message: 'Start date and end date are required' });
      }
  
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
  
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
  
      const foodTracks = await FoodTrackModel.find({
        date: { $gte: start, $lte: end }
      });
  
      res.status(200).json(foodTracks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export { trackFoodConsumption, getFoodTracksByDate, getFoodTracksByDateRange };
  