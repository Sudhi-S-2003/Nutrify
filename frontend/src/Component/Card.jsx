import React from 'react';

function Card() {
  return (
    <div className="card card-side bg-base-100 max-w-[500px] shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Food item"
          className="w-48 h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold mb-1">Milk</h2>
        <p className="text-gray-700 mb-1"><strong>Measure:</strong> 1 cup</p>
        <p className="text-gray-700 mb-1"><strong>Grams:</strong> 252</p>
        <p className="text-gray-700 mb-1"><strong>Calories:</strong> 345</p>
        <p className="text-gray-700 mb-1"><strong>Protein:</strong> 16 g</p>
        <p className="text-gray-700 mb-1"><strong>Fat:</strong> 20 g</p>
        <p className="text-gray-700 mb-1"><strong>Saturated Fat:</strong> 18 g</p>
        <p className="text-gray-700 mb-1"><strong>Fiber:</strong> 0 g</p>
        <p className="text-gray-700 mb-1"><strong>Carbs:</strong> 24 g</p>
        <p className="text-gray-700 mb-1"><strong>Category:</strong> Dairy products</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
