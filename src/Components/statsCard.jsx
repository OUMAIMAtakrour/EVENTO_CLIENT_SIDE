import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <p className="text-2xl font-bold text-skyBlue">{value}</p>
    </div>
  );
};

export default StatsCard;
