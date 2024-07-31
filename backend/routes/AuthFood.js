import express from 'express';
import { getAllFoods, getFoodDetail } from '../controller/LoginUserFood.js';

const AuthFoodRoutes = express.Router();

AuthFoodRoutes.get('/', getAllFoods);
AuthFoodRoutes.get('/:id', getFoodDetail);

export default AuthFoodRoutes;
