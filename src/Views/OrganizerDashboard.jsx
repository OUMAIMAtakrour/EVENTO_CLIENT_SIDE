import React from "react";
import OrganizerStatsCard from "../Components/OrganizerStats";
import OrganizerWidgets from "../Components/OrganizerWidget";

const OrganizerOverview = () => {
  const stats = [
    { label: "Total Users", value: 120 },
    { label: "Active Events", value: 15 },
    { label: "Pending Approvals", value: 7 },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
        <p className="text-gray-500">Overview of your organizer activities</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <OrganizerStatsCard key={index} stat={stat} />
        ))}
      </section>

      <OrganizerWidgets />
    </main>
  );
};

export default OrganizerOverview;
