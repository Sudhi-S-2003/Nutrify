import React from 'react';
import axios from 'axios'

function ProfileCard() {
  const [profile, setProfile] = React.useState([]);
  const [token,setToken]=React.useState(localStorage.getItem('token'))
  React.useEffect(()=>{
    axios.get('http://localhost:7000/Auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(
      (response) => {
        // console.log(response.data)
        setProfile(response.data)
      }
    )

  },[])
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
        <h2 className="card-title text-2xl font-semibold mb-2  ">{profile.name}</h2>
        <p className="text-lg mb-1"><strong>Username:</strong> {profile.username}</p>
        <p className="text-lg mb-1"><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
