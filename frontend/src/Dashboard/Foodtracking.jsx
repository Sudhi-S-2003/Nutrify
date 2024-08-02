import { useState } from 'react';

function FoodTracking() {
  const [activeTab, setActiveTab] = useState('date');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Fetch Food Tracks</h1>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex border-b border-gray-300">
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'date' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('date')}
          >
            Fetch by Date
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'range' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('range')}
          >
            Fetch by Date Range
          </button>
        </div>
      </div>

      {/* Fetch by Date */}
      {activeTab === 'date' && (
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
            />
            <button
              className="btn btn-secondary mt-2 w-full"
            >
              Fetch by Date
            </button>
          </div>
        </div>
      )}

      {/* Fetch by Date Range */}
      {activeTab === 'range' && (
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
            />
          </div>
          <button
            className="btn btn-secondary mt-2 w-full"
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
                <th className="p-2 border-b">User ID</th>
                <th className="p-2 border-b">Food ID</th>
                <th className="p-2 border-b">Quantity (grams)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="p-2 border-b text-center">No records found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FoodTracking;
