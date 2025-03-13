import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';
import '../../styles/admin.css'; // Import the CSS file

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editRole, setEditRole] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/get_users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axiosInstance.delete(`/delete_user/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditRole = (userId, role) => {
    setEditUserId(userId);
    setEditRole(role);
  };

  const handleSaveRole = async (userId) => {
    try {
      await axiosInstance.patch(`/update_user/${userId}`, { role: editRole });
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, role: editRole } : user
        )
      );
      setEditUserId(null);
      setEditRole('');
      alert('User role updated successfully');
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  return (
    <div className="manage-users">
      <h3 className="text-xl font-bold mb-2">User Management</h3>
      <p className="mb-4">
        This page allows administrators to manage user accounts. You can view,
        delete, and manage users that are registered on the platform. Use the
        delete button to remove a user from the list.
      </p>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </div>
            <div className="user-actions">
              {editUserId === user.id ? (
                <>
                  <select
                    value={editRole}
                    onChange={(e) => setEditRole(e.target.value)}
                  >
                    <option value="graduate">Graduate</option>
                    <option value="premium_user">Premium User</option>
                    <option value="admin">Admin</option>
                  </select>
                  <button
                    onClick={() => handleSaveRole(user.id)}
                    className="ml-2 text-green-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditUserId(null)}
                    className="ml-2 text-red-500"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditRole(user.id, user.role)}
                    className="ml-2 text-blue-500"
                  >
                    Edit Role
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="ml-2 text-red-500"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
