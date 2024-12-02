import React from "react";
import { Edit, Trash2, Mail } from "lucide-react";

const MemberCard = ({ member, onEdit, onDelete }) => (
  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
    <div className="p-5 flex flex-col items-center">
      <img
        src={
          member.avatar ||
          `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`
        }
        alt={member.name}
        className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-gray-700"
      />
      <h3 className="text-xl text-white mb-2">{member.name}</h3>
      <p className="text-gray-400 mb-4">{member.role}</p>
      <div className="flex items-center text-gray-400 mb-4">
        <Mail size={16} className="mr-2" />
        {member.email}
      </div>
      <div className="flex justify-between w-full">
        <button
          onClick={() => onEdit(member)}
          className="text-blue-400 hover:text-blue-300 flex items-center"
        >
          <Edit size={16} className="mr-2" /> Edit
        </button>
        <button
          onClick={() => onDelete(member._id)}
          className="text-red-400 hover:text-red-300 flex items-center"
        >
          <Trash2 size={16} className="mr-2" /> Delete
        </button>
      </div>
    </div>
  </div>
);

export default MemberCard;
