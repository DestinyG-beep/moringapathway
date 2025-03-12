import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Your application for Software Engineer has been received.',
      date: '2025-02-15',
    },
    {
      id: 2,
      message: 'Your interview for Frontend Developer is scheduled for 2025-02-20.',
      date: '2025-02-10',
    },
    {
      id: 3,
      message: 'Your application for Backend Developer has been rejected.',
      date: '2025-01-25',
    },
    // Add more notifications as needed
  ]);

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <p>View your recent notifications.</p>
      
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <p>{notification.message}</p>
            <p>Date: {notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;