const OrganizerStatsCard = ({ stat }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-gray-600 text-lg font-medium">{stat.label}</h3>
      <p className="text-3xl font-bold text-sky-500 mt-2">{stat.value}</p>
    </div>
  );
};

export default OrganizerStatsCard;
