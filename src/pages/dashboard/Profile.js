import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '', // Add password field
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_user?user_id=${user.id}`);
        setProfile(response.data);
        setFormData({
          username: response.data.username,
          email: response.data.email,
          phone: response.data.phone,
          password: '', // Initialize password as empty
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [user.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`${config.backendUrl}/update_user/${user.id}`, formData);
      setProfile(response.data);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      {profile ? (
        <div className="profile-details">
          {editMode ? (
            <>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateProfile}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <>
              <p>Username: {profile.username}</p>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
              <p>Role: {profile.role}</p>
              <button onClick={() => setEditMode(true)}>Edit</button>
            </>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;