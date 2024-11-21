// src/components/dashboard/views/Overview.js
import React from 'react';
import { FiUsers, FiBookOpen, FiAward, FiTrendingUp } from 'react-icons/fi';

const StatCard = ({ icon: Icon, label, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
        {change && (
          <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? '+' : ''}{change}% from last month
          </p>
        )}
      </div>
      <div className="bg-primary bg-opacity-10 p-4 rounded-full">
        <Icon size={24} className="text-primary" />
      </div>
    </div>
  </div>
);

const Overview = () => {
  const stats = {
    totalStudents: '1,234',
    activeCourses: '15',
    completedAssessments: '456',
    averageProgress: '78%'
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={FiUsers}
          label="Total Students"
          value={stats.totalStudents}
          change={12}
        />
        <StatCard
          icon={FiBookOpen}
          label="Active Courses"
          value={stats.activeCourses}
          change={5}
        />
        <StatCard
          icon={FiAward}
          label="Completed Assessments"
          value={stats.completedAssessments}
          change={8}
        />
        <StatCard
          icon={FiTrendingUp}
          label="Average Progress"
          value={stats.averageProgress}
          change={-2}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Add recent activity items here */}
        </div>
      </div>

      {/* Additional sections can be added here */}
    </div>
  );
};

export default Overview;