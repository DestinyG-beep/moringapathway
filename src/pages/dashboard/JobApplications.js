import React, { useState, useEffect } from 'react';
import '../../styles/jobapplications.css';

const JobApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = () => {
      const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
      setApplications(appliedJobs);
    };

    fetchApplications();
  }, []);

  const handleRemoveApplication = (id) => {
    const updatedApplications = applications.filter(job => job.id !== id);
    setApplications(updatedApplications);
    localStorage.setItem('appliedJobs', JSON.stringify(updatedApplications));
  };

  return (
    <div className="job-applications">
      <h1>My Job Applications</h1>
      <p>View and manage your job applications.</p>

      <div className="applications-list">
        {applications.length === 0 ? (
          <p>No job applications.</p>
        ) : (
          applications.map((application) => (
            <div key={application.id} className="application-card">
              <h2>{application.title}</h2>
              <p>{application.employer}</p>
              <p>{application.location}</p>
              <p>{application.job_type}</p>
              <p>Date Applied: {new Date(application.date_posted).toLocaleDateString()}</p>
              <button>View Details</button>
              <button onClick={() => handleRemoveApplication(application.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobApplications;
