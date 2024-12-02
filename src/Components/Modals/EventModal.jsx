import React, { useState, useEffect } from "react";
import { X, Calendar, Users, FileText, Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Slices/UserSlice";

const EventModal = ({ isOpen, onClose, event, onEventChange, onSave }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { users, loading: usersLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchUsers());
    }
  }, [isOpen, dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (user) => {
    const isSelected = selectedUsers.some(
      (selectedUser) => selectedUser._id === user._id
    );

    if (isSelected) {
      setSelectedUsers(
        selectedUsers.filter((selectedUser) => selectedUser._id !== user._id)
      );
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleSave = () => {
    onEventChange({
      ...event,
      members: selectedUsers.map((user) => ({ _id: user._id })),
    });
    onSave();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-2xl w-full max-w-lg p-8 relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl text-white mb-6 flex items-center">
          <Calendar className="mr-2 text-blue-400" size={24} />
          {event._id ? "Edit Event" : "Add New Event"}
        </h2>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Event Title"
              required
              value={event.title || ""}
              onChange={(e) =>
                onEventChange({ ...event, title: e.target.value })
              }
              className="w-full bg-gray-700 bg-opacity-50 text-white p-3 pl-10 rounded-lg border border-gray-600"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Calendar size={20} />
            </span>
          </div>

          <div className="relative">
            <textarea
              placeholder="Event Description"
              value={event.description || ""}
              onChange={(e) =>
                onEventChange({ ...event, description: e.target.value })
              }
              rows="4"
              className="w-full bg-gray-700 bg-opacity-50 text-white p-3 pl-10 rounded-lg border border-gray-600"
            />
            <span className="absolute left-3 top-3 transform text-gray-400">
              <FileText size={20} />
            </span>
          </div>

          <div className="relative">
            <div className="flex items-center bg-gray-700 bg-opacity-50 p-2 rounded-lg border border-gray-600">
              <Users className="mr-2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-transparent text-white outline-none"
              />
            </div>

            {selectedUsers.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedUsers.map((user) => (
                  <span
                    key={user._id}
                    className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {user.name}
                    <button
                      onClick={() => handleUserSelect(user)}
                      className="ml-2 hover:bg-blue-700 rounded-full"
                    >
                      <X size={16} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {searchTerm && (
              <div className="mt-2 max-h-48 overflow-y-auto bg-gray-700 rounded-lg">
                {usersLoading ? (
                  <div className="p-4 text-center text-gray-400">
                    Loading users...
                  </div>
                ) : filteredUsers.length === 0 ? (
                  <div className="p-4 text-center text-gray-400">
                    No users found
                  </div>
                ) : (
                  filteredUsers.map((user) => (
                    <div
                      key={user._id}
                      onClick={() => handleUserSelect(user)}
                      className="p-2 hover:bg-gray-600 cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="mr-2">
                          <div className="text-white">{user.name}</div>
                          <div className="text-sm text-gray-400">
                            {user.email}
                          </div>
                        </div>
                      </div>
                      {selectedUsers.some(
                        (selectedUser) => selectedUser._id === user._id
                      ) && <Check className="text-green-500" size={20} />}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition mt-4 flex items-center justify-center"
          >
            Save Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
