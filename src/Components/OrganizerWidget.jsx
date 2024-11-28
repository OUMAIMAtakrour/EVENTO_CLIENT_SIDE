const OrganizerEventWidget = ({ event }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-500">{event.date}</p>
      </div>
      <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
        View
      </button>
    </div>
  );
};

export default OrganizerEventWidget;
