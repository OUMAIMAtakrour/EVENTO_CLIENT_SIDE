import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center border-b border-sky-300">
      <h1 className="text-xl font-bold text-sky-500">
        Sports Events Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
