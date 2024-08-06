import { useState } from "react";
import axios from "axios";

function FoodTracking() {
  const [activeTab, setActiveTab] = useState("date");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [diet, setDiet] = useState([]);
  const [dateRange, SetDateRange] = useState({});
  const [date, SetDate] = useState("");

  function dateRangehandler(e) {
    SetDateRange((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const fetchByDateRange = () => {
    const { startDate, endDate } = dateRange;
    axios
      .get(
        `http://localhost:7000/Auth/FoodTrack/tracks/by-date-range?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setDiet(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data by date range:", error);
      });
  };

  const fetchByDate = () => {
    axios
      .get(`http://localhost:7000/Auth/FoodTrack/tracks/by-date?date=${date}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response.data)
        setDiet(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data by date:", error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Fetch Food Tracks</h1>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex border-b border-gray-300">
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === "date"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("date")}
          >
            Fetch by Date
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === "range"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("range")}
          >
            Fetch by Date Range
          </button>
        </div>
      </div>

      {/* Fetch by Date */}
      {activeTab === "date" && (
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              value={date}
              onChange={(e) => SetDate(e.target.value)}
            />
            <button
              className="btn btn-secondary mt-2 w-full"
              onClick={fetchByDate}
            >
              Fetch by Date
            </button>
          </div>
        </div>
      )}

      {/* Fetch by Date Range */}
      {activeTab === "range" && (
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              name="startDate"
              value={dateRange.startDate}
              onChange={(e) => dateRangehandler(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              name="endDate"
              value={dateRange.endDate}
              onChange={(e) => dateRangehandler(e)}
            />
          </div>
          <button
            className="btn btn-secondary mt-2 w-full"
            onClick={fetchByDateRange}
          >
            Fetch by Date Range
          </button>
        </div>
      )}

      {/* Display Food Tracks */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Food Tracks</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-base-100 shadow-md rounded-lg">
            <thead>
              <tr className="bg-base-200 text-left">
                <th className="p-2 border-b">Date</th>
                <th className="p-2 border-b">Food Item</th>
                <th className="p-2 border-b">Category</th>
                <th className="p-2 border-b">Quantity (grams)</th>
                <th className="p-2 border-b">Measure</th>
                <th className="p-2 border-b">Calories</th>
              </tr>
            </thead>
            <tbody>
            {diet.length > 0 ? (
              diet.map((item, index) => {
                const quanity = item.quantity;
                // console.log(quanity,typeof quanity)
                const measure = item.measure;
                // console.log(measure,typeof measure)
                const basecalories = item.foodId.Calories;
                // console.log(basecalories,typeof basecalories)
                const baseMeasure = parseFloat(
                  item.foodId.Measure.split(" ")[0]
                );
                // console.log(baseMeasure,typeof baseMeasure)
                let calorie = undefined;
                if (measure) {
                  calorie = (baseMeasure * measure * basecalories).toFixed(2);
                }
                const baseQuanityinGram = item.foodId.Grams;
                // console.log(baseQuanityinGram,typeof baseQuanityinGram)
                if (quanity) {
                  calorie = (
                    (basecalories / baseQuanityinGram) *
                    quanity
                  ).toFixed(2);
                }

                return (
                  <tr key={index}>
                    <td className="p-2 border-b">{new Date(item.date).toLocaleString()}</td>
                    <td className="p-2 border-b">{item.foodId.Food}</td>
                    <td className="p-2 border-b">{item.foodId.Category}</td>
                    <td className="p-2 border-b">{item.quantity || "-"}</td>
                    <td className="p-2 border-b">{item.measure || "-"}</td>
                    <td className="p-2 border-b">{calorie}</td>
                    {/* <td className="p-2 border-b">
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => console.log("Edit entry with id:", 2)}
                      >
                        More
                      </button>
                    </td> */}
                  </tr>
                );
              })
            ) : (
              //  No records found message
              <tr>
                <td colSpan="6" className="p-2 border-b text-center">
                  No records found
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FoodTracking;
