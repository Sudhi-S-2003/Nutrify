import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Track() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(''); 

  // dummy data
  const foodData = {
    name: 'Milk',
    measure: '1 cup',
    grams: 252,
    calories: 345,
    protein: '16 g',
    fat: '20 g',
    saturatedFat: '18 g',
    fiber: '0 g',
    carbs: '24 g',
    category: 'Dairy products'
  };

  useEffect(() => {
    setQuantity(foodData.grams);
  }, [foodData.grams]);

  const handleAddToDiet = () => {
    console.log(`Food ID: ${id}, Quantity: ${quantity}`);
  };

  const handleCalculate = () => {
    
    console.log(`Calculating for Quantity: ${quantity}`);
  };

  return (
    <div className="container mx-auto p-6 shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Track Food Consumption</h1>
      <div className="bg-bas-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Food Details</h2>
        <div className="flex items-center gap-6 mb-6">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Food item"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
          </figure>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{foodData.name}</h2>
            <p className="text-gray-600 mb-1"><strong>Measure:</strong> {foodData.measure}</p>
            <p className="text-gray-600 mb-1"><strong>Grams:</strong> {foodData.grams}</p>
            <p className="text-gray-600 mb-1"><strong>Calories:</strong> {foodData.calories}</p>
            <p className="text-gray-600 mb-1"><strong>Protein:</strong> {foodData.protein}</p>
            <p className="text-gray-600 mb-1"><strong>Fat:</strong> {foodData.fat}</p>
            <p className="text-gray-600 mb-1"><strong>Saturated Fat:</strong> {foodData.saturatedFat}</p>
            <p className="text-gray-600 mb-1"><strong>Fiber:</strong> {foodData.fiber}</p>
            <p className="text-gray-600 mb-1"><strong>Carbs:</strong> {foodData.carbs}</p>
            <p className="text-gray-600 mb-1"><strong>Category:</strong> {foodData.category}</p>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Quantity (grams)</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter quantity"
          />
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleCalculate}
            className="btn btn-outline btn-secondary border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-4 py-2 rounded-lg"
          >
            Calculate
          </button>
          <button 
            onClick={handleAddToDiet}
            className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Add to Diet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Track;
