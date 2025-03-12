import React, { useState } from 'react';

const AdminDashboard = () => {
  // Sample data for users and resources
  const [users, setUsers] = useState([
    { id: 1, username: 'admin1', email: 'admin1@example.com', role: 'Admin' },
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'User' },
    { id: 3, username: 'user2', email: 'user2@example.com', role: 'User' },
  ]);

  const [resources, setResources] = useState([
    { id: 1, name: 'Resume Tips' },
    { id: 2, name: 'Career Guidance' },
    { id: 3, name: 'Job Application Tips' },
  ]);

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <h2>Manage Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Manage Resources</h2>
      <ul className="resource-list">
        {resources.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
