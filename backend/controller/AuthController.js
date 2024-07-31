import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import env from "dotenv";
env.config()
// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET_KEY; 

// Register a new user
const register = async (req, res) => {
  try {
    const {name, username,email, password } = req.body;
    const user = new UserModel({name, username,email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login a user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { register, login };
