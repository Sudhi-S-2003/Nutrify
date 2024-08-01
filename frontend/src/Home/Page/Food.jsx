import Card from "../../Component/Card";
import LockedCard from "../../Component/LockedCard";

function Food() {
  return (
    <div>
      {/* Page Heading */}
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">Explore Our Food Collection</h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover the latest and exclusive content by logging in.
        </p>
      </header>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center p-3">
        <label className="input input-bordered flex items-center gap-2 w-full m-3 max-w-[300px]">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select className="select select-bordered w-full max-w-[300px]">
          <option disabled selected>
            Category
          </option>
          <option>Fruit</option>
          <option>Large Orange</option>
          <option>Large Tomato</option>
        </select>
      </div>

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
        <button className="btn btn-primary">Login</button>
      </div>

      </div>
    </div>
  );
}

export default Food;
