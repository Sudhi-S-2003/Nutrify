import express from 'express';
import { register, login } from '../controller/AuthController.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/register', register);
AuthRoutes.post('/login', login);

export default AuthRoutes;
