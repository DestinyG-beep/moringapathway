import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Clock, BookOpen, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/dashboard.css';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-home">
      <h1>Welcome, {user?.name}</h1>
      <p>
        This is your dashboard home page. Here you can find an overview of your activities and quick access to various sections.
      </p>

      <div className="dashboard-overview">
        <Link to="/dashboard/applications" className="overview-card">
          <Briefcase size={24} />
          <h2>Job Applications</h2>
          <p>View and manage your job applications.</p>
        </Link>
        <Link to="/dashboard/saved" className="overview-card">
          <Clock size={24} />
          <h2>Saved Jobs</h2>
          <p>View and manage your saved jobs.</p>
        </Link>
        <Link to="/dashboard/resources" className="overview-card">
          <BookOpen size={24} />
          <h2>Resources</h2>
          <p>Access career resources and guides.</p>
        </Link>
        <Link to="/dashboard/profile" className="overview-card">
          <User size={24} />
          <h2>Profile</h2>
          <p>View and edit your profile information.</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
