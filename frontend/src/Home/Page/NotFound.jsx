import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[63vh] bg-gray-100 text-gray-800 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-red-600">404</h1>
        <p className="text-2xl mb-6">Oops! Page not found.</p>
        <p className="text-lg mb-8">The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="flex items-center justify-center w-auto bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded">
          <FaHome className="mr-2" size={20} />
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
