import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_user?user_id=${user.id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [user.id]);

  return (
    <div className="profile">
      <h1>Profile</h1>
      {profile ? (
        <div className="profile-details">
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Role: {profile.role}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;