import React from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="text-center">
        <FaLock className="text-6xl mb-4 text-red-600" />
        <h1 className="text-4xl font-bold mb-4">403</h1>
        <p className="text-2xl mb-6">Unauthorized Access</p>
        <p className="text-lg mb-8">You do not have permission to view this page.</p>
        <Link to="/" className="inline-flex items-center text-blue-500 hover:underline text-lg">
          <span className="mr-2">←</span>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
