import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-3 sticky top-0 bg-slate-200 text-slate-700">
      <div className="text-2xl">Nutrify</div>
      <div className="flex gap-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Foods</a>
      </div>
      <div className="flex gap-3 items-center">
        <button>Login</button>
        <a href="">Sign up</a>
      </div>
    </div>
  );
}

export default Navbar;
