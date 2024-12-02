import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, Plus, Menu, X } from "lucide-react";

import SideBar from "../Components/sidebar";
import EventCard from "../Components/Cards/CardEvent";
import EventModal from "../Components/Modals/EventModal";

import {
  fetchEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  setCurrentEvent,
  clearCurrentEvent,
} from "../Slices/EventSlice";

const EventManagement = () => {
  const dispatch = useDispatch();
  const { events, loading, error, currentEvent } = useSelector(
    (state) => state.event
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleAddEvent = () => {
    dispatch(
      setCurrentEvent({
        title: "",
        description: "",
        members: [],
      })
    );
  };

  const handleEditEvent = (event) => {
    dispatch(setCurrentEvent(event));
  };

  const handleSaveEvent = () => {
    if (currentEvent._id) {
      dispatch(
        updateEvent({
          id: currentEvent._id,
          eventData: currentEvent,
        })
      );
    } else {
      dispatch(createEvent(currentEvent));
    }
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
  };

  const handleCloseModal = () => {
    dispatch(clearCurrentEvent());
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
              <Calendar className="mr-2 text-blue-400" size={28} />
              Event Management
            </h2>
            <button
              onClick={handleAddEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition"
            >
              <Plus size={20} className="mr-2" /> Add Event
            </button>
          </div>

          {error && (
            <div className="bg-red-500 text-white p-4 rounded-lg">{error}</div>
          )}

          {loading && <div className="text-center text-white">Loading...</div>}

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onEdit={handleEditEvent}
                onDelete={handleDeleteEvent}
              />
            ))}
          </div>

          <EventModal
            isOpen={!!currentEvent}
            onClose={handleCloseModal}
            event={currentEvent}
            onEventChange={(updatedEvent) =>
              dispatch(setCurrentEvent(updatedEvent))
            }
            onSave={handleSaveEvent}
          />
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

export default EventManagement;
