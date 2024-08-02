import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Message from "../../Message/Message"; 
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }

    try {
      const response = await axios.post('http://localhost:7000/Account/login', formData);
      if (response.status === 200) {
        Message('success', 'Login successful!');
        localStorage.setItem('token', response.data.token);
        navigate('/Auth/Dashboard');
      } else {
        Message('error', 'Login failed.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        Message('error', error.response.data.message);
      } else {
        Message('error', 'An error occurred.');
      }
    }
  };

  return (
    <div className="max-w-[400px] mx-auto p-6 bg-base-300 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Username </span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Username"
          />
        </label>
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="******"
          />
        </label>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      <button className="btn btn-success w-full mt-4">Login</button>
      <div className="text-center mt-4">
        <p>Don't have an account?</p>
        <Link to="/Signup" className="text-blue-500 underline">
          Sign Up
        </Link>
      </div>
      </form>
    </div>
  );
}

export default Login;
