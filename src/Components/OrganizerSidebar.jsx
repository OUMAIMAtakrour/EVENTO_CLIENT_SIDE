import React from "react";

const OrganizerSidebar = () => {
  const menuItems = [
    { icon: "🏠", label: "Dashboard", active: true },
    { icon: "👥", label: "Users" },
    { icon: "🎉", label: "Events" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <aside className="w-1/6 bg-gray-100 min-h-screen p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-sky-500 mb-6">Organizer</h1>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                item.active
                  ? "bg-sky-100 text-sky-500"
                  : "text-gray-600 hover:bg-gray-200"
              } transition`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default OrganizerSidebar;
