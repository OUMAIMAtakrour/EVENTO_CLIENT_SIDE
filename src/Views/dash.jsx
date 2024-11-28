import React from "react";
import OrganizerSidebar from "../Components/OrganizerSidebar";
import OrganizerHeader from "../Components/OrganizerHeader";
import OrganizerStatsCard from "../Components/OrganizerStats";
import OrganizerEventWidget from "../Components/OrganizerWidget";
import OrganizerUserList from "../Components/OrganizerUserTable";

const Dash = () => {
  const stats = [
    { label: "Total Users", value: 120 },
    { label: "Active Events", value: 15 },
    { label: "Pending Approvals", value: 7 },
  ];

  const events = [
    { title: "Community Meetup", date: "Dec 15, 2024" },
    { title: "Charity Auction", date: "Jan 10, 2025" },
  ];

  const users = [
    { name: "Jane Doe", email: "jane@example.com" },
    { name: "John Smith", email: "john@example.com" },
  ];
  return (
    <div className="flex">
      <OrganizerSidebar />
      <div className="flex-1 bg-gray-50 p-8">
        <OrganizerHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {stats.map((stat, index) => (
            <OrganizerStatsCard key={index} stat={stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {events.map((event, index) => (
            <OrganizerEventWidget key={index} event={event} />
          ))}
        </div>

        <div className="mt-8">
          <OrganizerUserList users={users} />
        </div>
      </div>
    </div>
  );
};

export default Dash;
