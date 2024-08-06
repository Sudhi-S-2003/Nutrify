import React from "react";
import axios from "axios";
function TodayDiet() {
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [diet, setDiet] = React.useState([]);
  const date = new Date();
  // console.log(date);
  React.useEffect(() => {
    axios
      .get(`http://localhost:7000/Auth/FoodTrack/tracks/by-date?date=${date}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response.data)
        setDiet(response.data);
        setDiet(response.data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Today's Diet</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-base-100 shadow-md rounded-lg">
          <thead>
            <tr className="bg-base-200 text-left">
              <th className="p-2 border-b">Food Item</th>
              <th className="p-2 border-b">Category</th>
              <th className="p-2 border-b">Quantity (grams)</th>
              <th className="p-2 border-b">Measure</th>
              <th className="p-2 border-b">Calories</th>
              {/* <th className="p-2 border-b">Actions</th> */}
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
  );
}

export default TodayDiet;
