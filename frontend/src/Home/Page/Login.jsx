import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-[400px] mx-auto p-6 bg-base-300 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <div className="space-y-4">
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Username or Email</span>
          <input type="text" className="input input-bordered w-full" placeholder="Username or Email" />
        </label>
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Password</span>
          <input type="password" className="input input-bordered w-full" placeholder="******" />
        </label>
      </div>
      <button className="btn btn-success w-full mt-4">Login</button>
      <div className="text-center mt-4">
        <p>Don't have an account?</p>
        <Link to="/Signup" className="text-blue-500 underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
