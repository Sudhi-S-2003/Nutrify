import FoodTrackModel from "../models/Track.js";
const trackFoodConsumption = async (req, res) => {
  try {
    const { foodId, quantity, measure } = req.body;
    const userId = req.user.id;

    // Validate the input
    if (!foodId || (!quantity && !measure) || (quantity && quantity <= 0) || (measure && measure <= 0)) {
      return res.status(400).json({ message: 'Food ID and either quantity or measure (both must be positive if provided) are required' });
    }
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const existingTrack = await FoodTrackModel.findOne({
      userId,
      foodId,
      date: { $gte: startOfDay, $lte: endOfDay }
    });

    let foodTrack;
    let message;
    if (existingTrack) {
      if (quantity) {
        existingTrack.quantity = quantity;
        existingTrack.measure = undefined;
      }

      if (measure) {
        existingTrack.measure = measure;
        existingTrack.quantity = undefined;
      }

      foodTrack = await existingTrack.save();
      message = 'Food consumption updated successfully';
    } else {
      const foodTrackData = {
        userId,
        foodId,
        date: new Date(),
        quantity,
        measure
      };

      foodTrack = new FoodTrackModel(foodTrackData);
      await foodTrack.save();
      message = 'Food consumption added to diet successfully';
    }

    const populatedTrack = await FoodTrackModel.findById(foodTrack._id)
      .populate('userId', '-password') // Exclude password from user details
      .populate('foodId', 'Food Category');// Include food only food name Category details

    res.status(200).json({ message, foodTrack: populatedTrack });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFoodTracksByDate = async (req, res) => {
  try {
    const { date } = req.query;
    const userId = req.user.id;

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const foodTracks = await FoodTrackModel.find({
      date: { $gte: startOfDay, $lte: endOfDay },
      userId
    })
    // .populate('userId', '-password')
    .populate('foodId'); // Include food details

    res.status(200).json(foodTracks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFoodTracksByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const userId = req.user.id;

    if (!startDate || !endDate) {
      return res.status(400).json({ message: "Start date and end date are required" });
    }

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    const foodTracks = await FoodTrackModel.find({
      date: { $gte: start, $lte: end },
      userId
    })
    .populate('userId', '-password') // Include user details
    .populate('foodId'); // Include food details

    res.status(200).json(foodTracks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { trackFoodConsumption, getFoodTracksByDate, getFoodTracksByDateRange };
