import React from "react";
import Events from "../Components/eventTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-700">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-sky-500">FitPlan Dashboard</h1>
        <input
          type="text"
          placeholder="Search here..."
          className="border rounded-full px-4 py-2 text-sm w-64 outline-none focus:ring-2 focus:ring-sky-300"
        />
        <div className="flex space-x-4 items-center">
          <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600">
            Notifications
          </button>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full w-10 h-10"
          />
        </div>
      </nav>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gradient-to-r from-sky-500 to-blue-400 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">
              Have a Good Day, Wendy 👋
            </h2>
            <p className="text-sm mt-2">
              Fuel your days with the boundless enthusiasm of a lifelong
              explorer.
            </p>
            <button className="mt-4 bg-white text-sky-500 px-4 py-2 rounded-full hover:bg-gray-100">
              I Want To...
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-sky-500">
              Upcoming Schedule
            </h3>
           <Events></Events>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-sky-500">
              Active Chats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Jane Cooper</h4>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
                <button className="text-sky-500 hover:underline">
                  Message
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Theresa Angel</h4>
                  <p className="text-sm text-gray-500">Last seen 30 mins ago</p>
                </div>
                <button className="text-sky-500 hover:underline">
                  Message
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-300 to-sky-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Today's Weather</h3>
            <p className="text-sm mt-2">Clear skies, 25°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
