import React from "react";

const UserTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold text-sky-500 mb-4">Users</h2>
      <table className="w-full text-left border-collapse border border-sky-300">
        <thead>
          <tr className="text-gray-600 bg-sky-100 border-b">
            <th className="p-2 border border-sky-300">Name</th>
            <th className="p-2 border border-sky-300">Email</th>
            <th className="p-2 border border-sky-300">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-sky-50">
            <td className="p-2 border border-sky-300">John Doe</td>
            <td className="p-2 border border-sky-300">john@example.com</td>
            <td className="p-2 border border-sky-300">Participant</td>
          </tr>
          <tr className="border-b hover:bg-sky-50">
            <td className="p-2 border border-sky-300">Jane Smith</td>
            <td className="p-2 border border-sky-300">jane@example.com</td>
            <td className="p-2 border border-sky-300">Organizer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
