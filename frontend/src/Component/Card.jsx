import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id=null,data }) {
  return (
    
    <div className="card card-side bg-base-100 max-w-[500px] shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img
          src={data.image}
          alt="Food item"
          className="w-48 h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
      <h2 className="card-title text-2xl font-semibold mb-2">{data.Food}</h2>
        <p className="text-lg mb-1"><strong>Measure:</strong> {data.Measure}</p>
        <p className="text-lg mb-1"><strong>Grams:</strong> {data.Grams}</p>
        <p className="text-lg mb-1"><strong>Calories:</strong> {data.Calories}</p>
        {/* <p className="text-lg mb-1"><strong>Protein:</strong> 16 g</p>
        <p className="text-lg mb-1"><strong>Fat:</strong> 20 g</p>
        <p className="text-lg mb-1"><strong>Saturated Fat:</strong> 18 g</p>
        <p className="text-lg mb-1"><strong>Fiber:</strong> 0 g</p>
        <p className="text-lg mb-1"><strong>Carbs:</strong> 24 g</p> */}
        <p className="text-lg mb-4"><strong>Category:</strong> {data.Category}</p>
        <div className="card-actions justify-end">
        {id ? (
            <Link to={`/Auth/Track/${id}`}>
              <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
                Learn More
              </button>
            </Link>
          ) : (
            <Link to="/Signup">
              <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
