import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from 'react-router-dom'
function Navbar() {
  const getInitialTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    const newTheme = darkMode==="dark" ? 'light' : 'dark';
    setDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
    <div className="flex justify-between p-3 w-[100%] z-10  fixed bg-base-200 text-base-content" >
      <div className="text-2xl">Nutrify</div>
      <div className="sm:flex gap-5 hidden">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Foods"}>Foods</Link>
      </div>
      <div className="flex gap-3 items-center">
      <button onClick={toggleTheme} className="p-2">
          {darkMode === "dark"  ? (
            <IoSunnyOutline size={20} />
          ) : (
            <FaRegMoon size={20} />
          )}
        </button>
       <Link to="/Login"> <button >Login</button></Link>
        <Link to="/Signup">Sign up</Link>
        <button onClick={toggleMenu} className="sm:hidden p-2">
            {/* Add a hamburger icon here */}
            &#9776;
          </button>
      </div> 
    </div>
    {/* Mobile Menu */}
    {isOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden fixed top-14 left-0 w-full bg-slate-200 text-slate-700 p-6 flex flex-col items-center shadow-lg"
        >
          <Link to="/" onClick={toggleMenu} className="py-2">Home</Link>
          <Link to="/About" onClick={toggleMenu} className="py-2">About</Link>
          <Link to="/Contact" onClick={toggleMenu} className="py-2">Contact</Link>
          <Link to="/Foods" onClick={toggleMenu} className="py-2">Foods</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
