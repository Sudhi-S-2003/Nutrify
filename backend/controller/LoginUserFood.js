import FoodModel from '../models/Food.js';

// Get all foods with optional category filtering
const getAllFoods = async (req, res) => {
  try {
    const { Category } = req.body; // Corrected this line
    const filter = Category ? { Category: new RegExp(Category, 'i') } : {};

    const foods = await FoodModel.find(filter);
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single food detail by ID
const getFoodDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findById(id);

    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getAllFoods, getFoodDetail };

