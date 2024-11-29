const FuturisticSidebar = ({ isSidebarOpen }) => {
  const location = useLocation();
  const menuItems = [
    { icon: Home, label: "Dashboard", tab: "/org" },
    { icon: Calendar, label: "Events", tab: "/event" },
    { icon: Users, label: "Team", tab: "/users" },
    { icon: Activity, label: "Analytics", tab: "/analytics" },
    { icon: Settings, label: "Settings", tab: "/settings" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-900 bg-opacity-80 backdrop-blur-lg 
        border-r border-gray-700 z-40 transition-all duration-300 
        ${isSidebarOpen ? "w-64" : "w-25"} flex flex-col justify-between`}
    >
      <div className="flex items-center p-6 border-b border-gray-700">
        <Zap className="text-blue-400 mr-3" size={28} />
        {isSidebarOpen && (
          <h2 className="text-2xl font-extralight text-white tracking-wide">
            TechSports
          </h2>
        )}
      </div>

      <nav className="flex-grow p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.tab}
            to={item.tab}
            className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
              location.pathname === item.tab
                ? "bg-blue-600 bg-opacity-30 text-blue-300"
                : "hover:bg-gray-800 text-gray-400"
            }`}
          >
            <item.icon
              className={`mr-3 ${
                location.pathname === item.tab
                  ? "text-blue-400"
                  : "text-gray-500"
              }`}
              size={22}
            />
            {isSidebarOpen && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        {isSidebarOpen ? (
          <div className="flex items-center">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
              alt="Admin"
              className="w-10 h-10 rounded-full mr-3 border-2 border-gray-700"
            />
            <div>
              <p className="text-sm text-white">Admin User</p>
              <p className="text-xs text-gray-400">Organizer</p>
            </div>
          </div>
        ) : (
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
            alt="Admin"
            className="w-10 h-10 rounded-full mx-auto border-2 border-gray-700"
          />
        )}
      </div>
    </div>
  );
};
export default FuturisticSidebar;
