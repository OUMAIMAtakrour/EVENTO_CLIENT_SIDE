import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../Components/sidebar";
import MemberCard from "../Components/Cards/MemeberCard";
import UserModal from "../Components/Modals/UserModal";
import { Plus, Users, Menu, X } from "lucide-react";
import {
  fetchUserProfile,
  createUser,
  fetchUsers,
  updateUserProfile,
  deleteUserAccount,
} from "../Slices/UserSlice";

const UserRoles = {
  MEMBER: "member",
  ORGANIZER: "organizer",
};

const TeamManagement = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [modalMode, setModalMode] = useState("add");

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddMember = () => {
    setModalMode("add");
    setCurrentMember({
      name: "",
      email: "",
      password: "",
      role: UserRoles.MEMBER,
    });
    setIsModalOpen(true);
  };

  const handleEditMember = (member) => {
    setModalMode("edit");
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = (id) => {
    dispatch(deleteUserAccount(id));
  };

  const handleSaveMember = async (memberData) => {
    try {
      if (modalMode === "add") {
        const result = await dispatch(createUser(memberData));
        if (createUser.fulfilled.match(result)) {
          console.log("User created successfully:", result.payload);
        } else {
          console.error("Error creating user:", result.payload);
          return;
        }
      } else {
        const result = await dispatch(
          updateUserProfile({
            id: currentMember._id,
            updateData: memberData,
          })
        );
        if (updateUserProfile.fulfilled.match(result)) {
          console.log("User updated successfully:", result.payload);
        } else {
          console.error("Error updating user:", result.payload);
          return;
        }
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <SideBar isSidebarOpen={isSidebarOpen} />
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
      <main className="p-6 sm:ml-64">
        <header className="flex items-center mb-6">
          <Users className="mr-2 text-blue-400" size={28} />
          <h1 className="text-3xl font-light tracking-wide">Team Management</h1>
        </header>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((member) => (
              <MemberCard
                key={member._id}
                user={member}
                member={{
                  ...member,
                  avatar:
                    member.avatar ||
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`,
                }}
                onEdit={handleEditMember}
                onDelete={handleDeleteMember}
              />
            ))}
          </div>
        )}
        <button
          onClick={handleAddMember}
          className="fixed bottom-8 right-8 bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition shadow-lg"
        >
          <Plus size={24} />
        </button>
      </main>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSaveMember}
        mode={modalMode}
        initialData={currentMember}
      />
    </div>
  );
};

export default TeamManagement;
