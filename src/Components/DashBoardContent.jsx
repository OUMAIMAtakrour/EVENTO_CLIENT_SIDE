// import StatisticsCard from "./StatisticsCard";
import UserList from "./usreTable";
import EventList from "./eventTable";

const DashboardContent = ({ stats, users, events }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <StatisticsCard title="Total Users" value={stats.totalUsers} />
        <StatisticsCard title="Total Events" value={stats.totalEvents} />
        <StatisticsCard title="Revenue" value={`$${stats.revenue}`} /> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserList users={users} />
        <EventList events={events} />
      </div>
    </div>
  );
};

export default DashboardContent;
