import React, { useState } from "react";
import ProfileCard from "../Dashboard/ProfileCard";
import Settings from "../Dashboard/Settings";
import FoodTracking from "../Dashboard/Foodtracking";
import TodayDiet from "../Dashboard/TodayDiet"; // Import the TodayDiet component

function DashboardRouter() {
  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <div className="flex flex-col lg:flex-row h-[100%]">
      {/* Sidebar Navbar (for large screens) */}
      <div className="lg:w-1/4 w-full bg-base-200 p-4 lg:sticky lg:top-5 lg:h-screen lg:flex lg:flex-col lg:overflow-y-auto pt-20">
        <h2 className="text-xl font-bold mb-4 hidden sm:block">Dashboard</h2>
        <div className="tabs tabs-lifted flex flex-col">
          <button
            className={`tab ${
              selectedTab === "profile" ? "tab-active" : ""
            } w-full text-center py-3`}
            onClick={() => setSelectedTab("profile")}
          >
            Profile
          </button>
          <button
            className={`tab ${
              selectedTab === "settings" ? "tab-active" : ""
            } w-full text-center py-3`}
            onClick={() => setSelectedTab("settings")}
          >
            Settings
          </button>
          <button
            className={`tab ${
              selectedTab === "todaydiet" ? "tab-active" : ""
            } w-full text-center py-3`}
            onClick={() => setSelectedTab("todaydiet")}
          >
            Today's Diet
          </button>
          <button
            className={`tab ${
              selectedTab === "foodtracking" ? "tab-active" : ""
            } w-full text-center py-3`}
            onClick={() => setSelectedTab("foodtracking")}
          >
            Food Tracking
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-base-100 pt-20">
        {selectedTab === "profile" && (
          <div className="bg-base-100 border border-base-300 rounded-box p-6">
            <ProfileCard />
          </div>
        )}
        {selectedTab === "settings" && (
          <div className="bg-base-100 border border-base-300 rounded-box p-6">
            <Settings />
          </div>
        )}
        {selectedTab === "todaydiet" && (
          <div className="bg-base-100 border border-base-300 rounded-box p-6">
            <TodayDiet /> {/* Add your TodayDiet component here */}
          </div>
        )}
        {selectedTab === "foodtracking" && (
          <div className="bg-base-100 border border-base-300 rounded-box p-6">
            <FoodTracking />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardRouter;
