const OrganizerUserList = ({ users }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Users</h3>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md"
          >
            <div>
              <h4 className="text-gray-800 font-medium">{user.name}</h4>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <button className="text-sky-500 hover:underline">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizerUserList;
