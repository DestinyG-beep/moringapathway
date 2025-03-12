import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout, isAdmin } = useAuth(); // Add isAdmin
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Moringa Pathway</Link>
        
        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <nav className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/jobs" className="navbar-link">Jobs</Link>
            <Link to="/resources" className="navbar-link">Resources</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            {isAdmin && (
              <Link to="/admin" className="navbar-link">Admin</Link>
            )}
          </nav>
        </div>
        
        <div className="navbar-buttons">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
          
          {isAuthenticated ? (
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-white"
                onClick={toggleProfileMenu}
              >
                <User size={20} />
                <span>{user?.name}</span>
              </button>
              
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link 
                    to="/dashboard" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  {!user?.isPremium && (
                    <Link 
                      to="/premium" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-white-500"
                    >
                      Upgrade to Premium
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="login-button">Login</Link>
              <Link to="/register" className="signup-button">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;