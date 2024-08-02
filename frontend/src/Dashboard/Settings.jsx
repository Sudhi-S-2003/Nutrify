import React, { useState } from 'react';

function Settings() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., updating username and password)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="settings-container p-6 max-w-md mx-auto bg-base-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Disabled Name and Email */}
        <div className="form-group">
          <label className="block text-base-content">Name</label>
          <input
            type="text"
            value="John Doe"
            disabled
            className="input input-bordered w-full bg-base-200"
          />
        </div>
        <div className="form-group">
          <label className="block text-base-content">Email</label>
          <input
            type="email"
            value="john.doe@example.com"
            disabled
            className="input input-bordered w-full bg-base-200"
          />
        </div>

        {/* Changeable Username */}
        <div className="form-group">
          <label className="block text-base-content">Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="input input-bordered w-full"
            placeholder="New username"
          />
        </div>

        {/* Changeable Password */}
        <div className="form-group">
          <label className="block text-base-content">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input input-bordered w-full"
            placeholder="New password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;
