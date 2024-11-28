const OrganizerEventsTable = () => {
  const events = [
    {
      id: 1,
      title: "Camping at Ranca Upas",
      date: "11 Dec - 12 Dec",
      participants: 35,
    },
    {
      id: 2,
      title: "Mini Soccer",
      date: "12 Dec",
      participants: 20,
    },
    {
      id: 3,
      title: "Community Yoga Session",
      date: "15 Dec",
      participants: 50,
    },
  ];

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="bg-sky-100 text-gray-700">
          <th className="p-4">Event Name</th>
          <th className="p-4">Date</th>
          <th className="p-4">Participants</th>
          <th className="p-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id} className="hover:bg-sky-50">
            <td className="p-4">{event.title}</td>
            <td className="p-4">{event.date}</td>
            <td className="p-4">{event.participants}</td>
            <td className="p-4 text-right">
              <button className="text-sky-500 hover:underline">Edit</button> |{" "}
              <button className="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrganizerEventsTable;
