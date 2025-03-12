import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data from local storage:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post('/login', { username, password });
      const { user, access_token } = response.data;
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', access_token);
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (username, phone, email, password) => {
    try {
      const response = await axiosInstance.post('/register', { username, phone, email, password });
      const { user, access_token } = response.data;
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', access_token);
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isPremium: user?.role === 'premium',
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
