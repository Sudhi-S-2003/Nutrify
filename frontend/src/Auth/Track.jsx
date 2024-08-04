import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Component/Loading";
import Message from "../Message/Message";
function Track() {
  const { id } = useParams();
  const [token, SetToken] = useState(localStorage.getItem("token"));
  const [unit, setUnit] = useState({});
  const [track, setTrack] = useState([]);
  const [food, SetFood] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:7000/Auth/food/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        SetFood(response.data);
        setTrack(response.data);
      });
  }, []);

  function unitHandler(e) {
    setUnit({ [e.target.name]: e.target.value });
    console.log(unit);
  }
  const handleAddToDiet = () => {
    const data = {
      foodId: id,
      quantity: unit.quantity,
      measure: unit.measure,
      // Add any other necessary fields here
    };
    axios
      .post("http://localhost:7000/Auth/FoodTrack/track", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        Message("success", response.data.message);
      })
      .catch((error) => {
        Message("error", "Error adding food to diet");
      });
  };

  const handleCalculate = () => {
    if (unit.measure) {
      const measure = parseFloat(unit.measure);
      const fieldsToUpdate = [
        "Grams",
        "Calories",
        "Protein",
        "Fat",
        "SatFat",
        "Fiber",
        "Carbs",
      ];
      const newTrack = { ...track };
      fieldsToUpdate.forEach((field) => {
        if (food[field] !== undefined) {
          newTrack[field] = food[field] * measure || 0;
        }
      });
      newTrack.Measure = `${measure} ${food.Measure?.split(" ")[1] || ""}`;
      setTrack(newTrack);
    }
    if (unit.quantity) {
      const quantity = parseFloat(unit.quantity);
      const fieldsToUpdate = [
        "Calories",
        "Protein",
        "Fat",
        "SatFat",
        "Fiber",
        "Carbs",
      ];
      const newTrack = { ...track };
      fieldsToUpdate.forEach((field) => {
        if (food[field] !== undefined) {
          newTrack[field] = food[field] * (quantity / (food.Grams || 1)) || 0;
        }
      });
      newTrack.Grams = quantity;
      newTrack.Measure = "NB";
      setTrack(newTrack);
    }
  };
  if (food.length <= 0) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-6 shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Track Food Consumption
      </h1>
      <div className="bg-bas-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Food Details</h2>
        <div className="flex items-center gap-6 mb-6">
          <figure>
            <img
              src={track.image}
              alt="Food item"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
          </figure>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{track.Food}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Measure:</strong> {track.Measure}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Grams:</strong> {track.Grams}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Calories:</strong> {track.Calories}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Protein:</strong> {track.Protein}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Fat:</strong> {track.Fat}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Saturated Fat:</strong> {track.SatFat}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Fiber:</strong> {track.Fiber}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Carbs:</strong> {track.Carbs}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Category:</strong> {track.Category}
            </p>
          </div>
        </div>
        <div className="block sm:flex gap-4">
          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2">Quantity (grams)</label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Enter quantity in grams"
              name="quantity"
              value={unit.quantity || ""}
              onChange={unitHandler}
              min="0"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2">
              Measure (e.g., 1 {food.Measure && food.Measure.split(" ")[1]}=
              {food.Grams}gm)
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Enter measure (optional)"
              onChange={unitHandler}
              value={unit.measure || ""}
              name="measure"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCalculate}
            className="btn btn-outline btn-secondary border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-4 py-2 rounded-lg"
          >
            Calculate
          </button>
          <button
            onClick={handleAddToDiet}
            className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Add to Diet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Track;
