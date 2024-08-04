import axios from "axios";
import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import Loading from "../Component/Loading";
function Settings() {
  const [profile, setProfile] = React.useState({});
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/Auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response.data)
        setProfile(response.data);
      });
  }, []);
  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!profile.username) {
      newErrors.username = "Username is required";
    }

    if (profile.password && profile.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }
    try {
      axios
        .put("http://localhost:7000/Auth/profile", profile, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          Message("success", "Profile updated successfully!");
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            setToken(response.data.token);
          }
        })
        .catch((error) => {
          Message("error", "Error updating profile.");
          console.error("Error updating profile:", error);
        });
    } catch (error) {
      Message("error", "Error updating profile.");
    }
  };
  if (!profile || Object.keys(profile).length === 0) {
    return <Loading />;
  }
  

  return (
    <div className="settings-container p-6 max-w-md mx-auto bg-base-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Disabled Name and Email */}
        <div className="form-group">
          <label className="block text-base-content">Name</label>
          <input
            type="text"
            value={profile.name}
            disabled
            className="input input-bordered w-full bg-base-200"
          />
        </div>
        <div className="form-group">
          <label className="block text-base-content">Email</label>
          <input
            type="email"
            value={profile.email}
            disabled
            className="input input-bordered w-full bg-base-200"
          />
        </div>

        {/* Changeable Username */}
        <div className="form-group">
          <label className="block text-base-content">Username</label>
          <input
            type="text"
            value={profile.username}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        {/* Changeable Password */}
        <div className="form-group">
          <label className="block text-base-content">Password</label>
          <input
            type="password"
            value={profile.password}
            name="password"
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="New password"
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}


        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;
