import React from "react";
import { Link } from "react-router-dom";
function LockedCard() {
  return (
    <div className="card card-side bg-base-100 max-w-[500px] shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body">  
        <h2 className="card-title text-xl font-semibold mb-1">Evaporated, undiluted</h2>
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
        <Link to="/Signup">
              <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
                Sign In
              </button>
            </Link>
        </div>
      </div>
          {/* Locked blur effect */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-2">Login to Unlock</h2>
        <p className="mb-4">
          Get full access to exclusive content by logging in now!
        </p>
        <Link to="/Signup">
              <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
                Sign In
              </button>
            </Link>
      </div>

    </div>
  );
}

export default LockedCard;
