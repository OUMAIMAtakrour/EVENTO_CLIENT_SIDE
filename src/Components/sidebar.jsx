import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-full flex flex-col p-4">
      <h2 className="text-xl font-bold text-sky-500 mb-6">Dashboard Menu</h2>
      <nav className="space-y-4">
        <a href="#users" className="block text-gray-700 hover:text-sky-500">
          Users
        </a>
        <a href="#events" className="block text-gray-700 hover:text-sky-500">
          Events
        </a>
        <a href="#stats" className="block text-gray-700 hover:text-sky-500">
          Statistics
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
