import React from "react";

const OrganizerHeader = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-sm rounded-lg">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Organizer!
        </h1>
        <p className="text-gray-500">
          Here’s an overview of your events and users.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <span className="text-gray-600">Your Profile</span>
      </div>
    </header>
  );
};

export default OrganizerHeader;
