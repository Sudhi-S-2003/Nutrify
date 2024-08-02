import React from 'react';

function ProfileCard() {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full items-center ">
      <figure className="sm:w-1/3 w-full bg-gray-100">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Jane Doe's avatar"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-semibold mb-2  ">Jane Doe</h2>
        <p className="text-lg mb-1"><strong>Username:</strong> janedoe</p>
        <p className="text-lg mb-1"><strong>Email:</strong> jane.doe@example.com</p>
      </div>
    </div>
  );
}

export default ProfileCard;
