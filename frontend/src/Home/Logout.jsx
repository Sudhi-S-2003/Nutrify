import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({setToken}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null)
    navigate('/Login'); // Redirect to login page after logout
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
}

export default Logout;
