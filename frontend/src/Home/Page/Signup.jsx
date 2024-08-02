import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Message from '../../Message/Message'
import axios from 'axios';

function Signup() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
//Form validation
  const validateForm = () => {
    const newErrors = {};
  
    // Name validation only Alphabet no number
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only alphabets';
    }
    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } 
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    // Password validation (minimum 6 characters)
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
  
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }else{
      setErrors({});  
    }
    try {
      const response = await axios.post('http://localhost:7000/Account/register', formData);
      if (response.status === 201) { 
        Message('success', 'Registration successful!');
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      return navigate('/Login')
      } else {
        Message('error', 'Registration failed.');
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
    <div className="max-w-[400px] m-auto p-6 bg-base-300 rounded mb-3">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Name"
          />
        </label>
        {errors.name && <p className="text-red-500 text-sm m-auto">{errors.name}</p>}
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Username</span>
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
          <span className="text-sm w-full sm:w-1/3">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="example@gmail.com"
          />
        </label>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="******"
          />
        </label>
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      <button className="btn btn-success w-full mt-4">Sign Up</button>
      <div className="text-center mt-4">
        <p>Already have an account?</p>
        <Link to="/Login" className="text-blue-500 underline">
          Log In
        </Link>
      </div>
      </form>
    </div>
  );
}

export default Signup;
