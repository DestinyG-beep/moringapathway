import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Briefcase, BookOpen, Clock, User } from 'lucide-react';
import '../../styles/dashboard.css';

// Admin sub-pages
import AdminHome from './AdminHome';
import ManageUsers from './ManageUsers';
import ManageResources from './ManageResources';
import JobManagement from '../../components/admin/JobManagement';

const AdminDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {user?.username.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>{user?.username}</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <Link 
            to="/admin" 
            className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            <Briefcase size={20} />
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/admin/manage-users" 
            className={`nav-item ${location.pathname === '/admin/manage-users' ? 'active' : ''}`}
          >
            <User size={20} />
            <span>Manage Users</span>
          </Link>
          <Link 
            to="/admin/manage-resources" 
            className={`nav-item ${location.pathname === '/admin/manage-resources' ? 'active' : ''}`}
          >
            <BookOpen size={20} />
            <span>Manage Resources</span>
          </Link>
          <Link 
            to="/admin/job-management" 
            className={`nav-item ${location.pathname === '/admin/job-management' ? 'active' : ''}`}
          >
            <Clock size={20} />
            <span>Job Management</span>
          </Link>
        </nav>
      </div>
      
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-resources" element={<ManageResources />} />
          <Route path="/job-management" element={<JobManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
