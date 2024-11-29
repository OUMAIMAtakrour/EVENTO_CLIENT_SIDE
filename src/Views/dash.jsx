import React, { useState, useEffect } from "react";
import {
  Home,
  Calendar,
  Users,
  Settings,
  Activity,
  Menu,
  X,
  Zap,
  PieChart,
  BarChart2,
  TrendingUp,
  User,
  Mail,
  Bell,
} from "lucide-react";
import { Link,useLocation } from "react-router-dom";
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

const mockEventData = [
  { id: 1, name: "Tech Conference", date: "2024-06-15", status: "Upcoming" },
  { id: 2, name: "Product Launch", date: "2024-07-20", status: "Planning" },
  { id: 3, name: "Team Retreat", date: "2024-08-05", status: "Confirmed" },
];

const mockAnalyticsData = {
  totalEvents: 15,
  activeUsers: 243,
  revenue: 128500,
  growthRate: 22.5,
};

const EventCard = ({ event }) => (
  <div className="bg-gray-800 rounded-lg p-4 mb-4 flex justify-between items-center">
    <div>
      <h3 className="text-white font-semibold">{event.name}</h3>
      <p className="text-gray-400 text-sm">{event.date}</p>
    </div>
    <span
      className={`
      px-3 py-1 rounded-full text-xs font-bold
      ${
        event.status === "Upcoming"
          ? "bg-blue-500 text-white"
          : event.status === "Planning"
          ? "bg-yellow-500 text-black"
          : "bg-green-500 text-white"
      }
    `}
    >
      {event.status}
    </span>
  </div>
);

const AnalyticsWidget = ({ data }) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-gray-800 p-4 rounded-lg flex items-center">
      <PieChart className="text-blue-400 mr-4" size={40} />
      <div>
        <p className="text-gray-400">Total Events</p>
        <h3 className="text-white text-2xl font-bold">{data.totalEvents}</h3>
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg flex items-center">
      <Users className="text-green-400 mr-4" size={40} />
      <div>
        <p className="text-gray-400">Active Users</p>
        <h3 className="text-white text-2xl font-bold">{data.activeUsers}</h3>
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg flex items-center">
      <TrendingUp className="text-purple-400 mr-4" size={40} />
      <div>
        <p className="text-gray-400">Revenue</p>
        <h3 className="text-white text-2xl font-bold">
          ${data.revenue.toLocaleString()}
        </h3>
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg flex items-center">
      <BarChart2 className="text-red-400 mr-4" size={40} />
      <div>
        <p className="text-gray-400">Growth Rate</p>
        <h3 className="text-white text-2xl font-bold">{data.growthRate}%</h3>
      </div>
    </div>
  </div>
);

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New event added", type: "info" },
    { id: 2, message: "Team meeting reminder", type: "warning" },
  ]);

  return (
    <div className="relative">
      <Bell
        className="text-gray-300 hover:text-white cursor-pointer"
        size={24}
      />
      {notifications.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {notifications.length}
        </span>
      )}
    </div>
  );
};


const Dash = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const generateStars = () => {
      const starsContainer = document.getElementById("stars-background");
      if (starsContainer) {
        starsContainer.innerHTML = ""; // Clear existing stars
        for (let i = 0; i < 100; i++) {
          const star = document.createElement("div");
          star.classList.add("star");
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 5}s`;
          starsContainer.appendChild(star);
        }
      }
    };

    generateStars();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <AnalyticsWidget data={mockAnalyticsData} />
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl mb-4 text-white flex items-center">
                  <Calendar className="mr-2 text-blue-400" size={20} />
                  Upcoming Events
                </h2>
                {mockEventData.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        );
   
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
   
      <div
        id="stars-background"
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
          overflow: "hidden",
        }}
      />

    
      <FuturisticSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
      />

   
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        style={{
          marginLeft: isSidebarOpen ? "16rem" : "5rem",
          transition: "margin-left 0.3s ease",
        }}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

   
      <div
        className="relative z-10 p-6 transition-all duration-300"
        style={{
          marginLeft: isSidebarOpen ? "16rem" : "5rem",
          paddingTop: "2rem",
        }}
      >
       
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-extralight tracking-wide capitalize">
            {activeTab} Overview
          </h1>
          <div className="flex items-center space-x-6">
            <User
              className="text-gray-300 hover:text-white cursor-pointer"
              size={24}
            />
            <Mail
              className="text-gray-300 hover:text-white cursor-pointer"
              size={24}
            />
            <NotificationBell />
          </div>
        </header>

        
        {renderContent()}
      </div>

     
      <style jsx>{`
        .star {
          position: absolute;
          background-color: white;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 0.7;
          animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Dash;
