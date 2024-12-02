import React from "react";
import { MapPin, Calendar, Edit, Trash2 } from "lucide-react";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div
      key={event.id}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
    >
      <img
        src={
          event.image || "https://api.dicebear.com/7.x/shapes/svg?seed=default"
        }
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl text-white mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-400 mb-2">
          <MapPin size={16} className="mr-2" />
          {event.location}
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <Calendar size={16} className="mr-2" />
          {event.date}
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => onEdit(event)}
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <Edit size={16} className="mr-2" /> Edit
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="text-red-400 hover:text-red-300 flex items-center"
          >
            <Trash2 size={16} className="mr-2" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
