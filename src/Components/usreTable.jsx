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
  Plus,
  Edit,
  Trash2,
  User as UserIcon,
  Mail,
  Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";


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

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Project Manager",
      email: "john.doe@techsports.com",
      phone: "+1 (555) 123-4567",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Developer",
      email: "jane.smith@techsports.com",
      phone: "+1 (555) 987-6543",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 
  useEffect(() => {
    const generateStars = () => {
      const starsContainer = document.getElementById("stars-background");
      if (starsContainer) {
        starsContainer.innerHTML = "";
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

  const handleAddMember = () => {
    setCurrentMember({
      name: "",
      role: "",
      email: "",
      phone: "",
      avatar: "",
    });
    setIsModalOpen(true);
  };

  const handleEditMember = (member) => {
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleSaveMember = () => {
    if (currentMember.id) {
      setTeamMembers(
        teamMembers.map((member) =>
          member.id === currentMember.id ? currentMember : member
        )
      );
    } else {
      setTeamMembers([
        ...teamMembers,
        { ...currentMember, id: teamMembers.length + 1 },
      ]);
    }
    setIsModalOpen(false);
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
        activeTab="team"
        setActiveTab={() => {}}
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
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl text-white flex items-center font-extralight tracking-wide">
              <Users className="mr-2 text-blue-400" size={28} />
              Team Management
            </h2>
            <button
              onClick={handleAddMember}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition"
            >
              <Plus size={20} className="mr-2" /> Add Member
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
              >
                <div className="p-5 flex flex-col items-center">
                  <img
                    src={
                      member.avatar ||
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=default"
                    }
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-gray-700"
                  />
                  <h3 className="text-xl text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <div className="flex items-center text-gray-400 mb-2">
                    <Mail size={16} className="mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Phone size={16} className="mr-2" />
                    {member.phone}
                  </div>
                  <div className="flex justify-between w-full">
                    <button
                      onClick={() => handleEditMember(member)}
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <Edit size={16} className="mr-2" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id)}
                      className="text-red-400 hover:text-red-300 flex items-center"
                    >
                      <Trash2 size={16} className="mr-2" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl w-full max-w-lg p-8 relative border border-gray-700">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
                <h2 className="text-2xl text-white mb-6">
                  {currentMember.id ? "Edit Member" : "Add New Member"}
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={currentMember.name}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={currentMember.role}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        role: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={currentMember.email}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={currentMember.phone}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        phone: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Avatar URL"
                    value={currentMember.avatar}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        avatar: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                  />

                  <button
                    onClick={handleSaveMember}
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Save Member
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
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

export default TeamManagement;
