import { Link } from "react-router-dom";
import Card from "../../Component/Card";
import LockedCard from "../../Component/LockedCard";
import FilterSearch from "../../Component/FilterSearch";

function Food() {
  return (
    <div>
      <FilterSearch/>
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* LockedCard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-4 relative">
        <LockedCard />
        <LockedCard />
        <LockedCard />
        <LockedCard />
             {/* Locked blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-2">Login to Unlock</h2>
        <p className="mb-4">
          Get full access to exclusive content by logging in now!
        </p>
        <Link to="/Signup">
              <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
                Sign In
              </button>
            </Link>
      </div>

      </div>
    </div>
  );
}

export default Food;
