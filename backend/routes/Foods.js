import express from 'express';
import { GetAllFoodForNoLoginUser, GetFoodForNoLoginUser } from '../controller/NoLoginUserFood.js';

const FoodRoutes = express.Router();

// Route to get all food items for no login user
FoodRoutes.get('/all', GetAllFoodForNoLoginUser);

// Route to get food items for a specific category
FoodRoutes.post('/category', GetFoodForNoLoginUser);

export default FoodRoutes;
