import React from 'react';

function TodayDiet() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Today's Diet</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-base-100 shadow-md rounded-lg">
          <thead>
            <tr className="bg-base-200 text-left">
              <th className="p-2 border-b">Food Item</th>
              <th className="p-2 border-b">Quantity (grams)</th>
              <th className="p-2 border-b">Calories</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Hardcoded entries */}
            <tr>
              <td className="p-2 border-b">Milk</td>
              <td className="p-2 border-b">33</td>
              <td className="p-2 border-b">33</td>
              <td className="p-2 border-b">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => console.log('Edit entry with id:', 1)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => console.log('Delete entry with id:', 1)}
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b">Bread</td>
              <td className="p-2 border-b">50</td>
              <td className="p-2 border-b">150</td>
              <td className="p-2 border-b">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => console.log('Edit entry with id:', 2)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => console.log('Delete entry with id:', 2)}
                >
                  Delete
                </button>
              </td>
            </tr>
            {/* No records found message */}
            <tr>
              <td colSpan="4" className="p-2 border-b text-center">No records found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodayDiet;
