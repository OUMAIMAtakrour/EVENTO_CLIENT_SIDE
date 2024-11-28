const Events = () => {
  const events = [
    {
      title: "Camping at Ranca Upas",
      date: "11 Dec - 12 Dec",
      time: "10:00 AM",
      location: "Ranca Upas, Bandung",
    },
    {
      title: "Mini Soccer",
      date: "12 Dec",
      time: "4:00 PM",
      location: "Stadium A",
    },
    {
      title: "Community Yoga Session",
      date: "15 Dec",
      time: "7:00 AM",
      location: "City Park",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-sky-500">Upcoming Events</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center bg-sky-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-shrink-0 bg-sky-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.38 0 2.5-1.12 2.5-2.5S13.38 3 12 3 9.5 4.12 9.5 5.5 10.62 8 12 8zm0 3c-2.21 0-4.2.9-5.64 2.34C5.1 14.8 5 16.32 5 18h14c0-1.68-.1-3.2-1.36-4.66C16.2 11.9 14.21 11 12 11z"
                />
              </svg>
            </div>

            <div className="ml-4">
              <h4 className="text-lg font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500">
                📅 {event.date} | 🕒 {event.time}
              </p>
              <p className="text-sm text-gray-400">📍 {event.location}</p>
            </div>

            <button className="ml-auto bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
