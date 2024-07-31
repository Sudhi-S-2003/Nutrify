import express from 'express';
import {
  trackFoodConsumption,
  getFoodTracksByDate,
  getFoodTracksByDateRange
} from '../controller/FoodTrack.js';

const FoodTrackRoutes = express.Router();

FoodTrackRoutes.post('/track', trackFoodConsumption);
FoodTrackRoutes.get('/tracks/by-date', getFoodTracksByDate);
FoodTrackRoutes.get('/tracks/by-date-range', getFoodTracksByDateRange);

export default FoodTrackRoutes;
