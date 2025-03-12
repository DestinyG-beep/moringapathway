import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Briefcase, BookOpen, Star, Bell, Shield, Users, FileText } from 'lucide-react';

const DashboardHome = () => {
  const { user } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-home">
      <div className="dashboard-welcome">
        <h1>Welcome back, {user.name}!</h1>
        <p>{user.role === 'admin' ? "Manage platform activities" : "Here's an overview of your job search"}</p>
      </div>

      {/* Admin sees AdminDashboard, Users see UserDashboard */}
      {user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

// 🟢 USER DASHBOARD (For normal users)
const UserDashboard = () => {
  const stats = [
    { label: 'Applications', value: 12, icon: <Briefcase size={20} /> },
    { label: 'Saved Jobs', value: 8, icon: <Star size={20} /> },
    { label: 'Resources Viewed', value: 15, icon: <BookOpen size={20} /> },
    { label: 'Notifications', value: 3, icon: <Bell size={20} /> }
  ];

  return (
    <div>
      <h2>Your Activity</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🔴 ADMIN DASHBOARD (For Admins)
const AdminDashboard = () => {
  const adminStats = [
    { label: 'Total Users', value: 120, icon: <Users size={20} /> },
    { label: 'Job Posts', value: 45, icon: <Briefcase size={20} /> },
    { label: 'Reports', value: 5, icon: <FileText size={20} /> }
  ];

  return (
    <div>
      <h2>Admin Panel</h2>
      <div className="stats-grid">
        {adminStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardHome;
