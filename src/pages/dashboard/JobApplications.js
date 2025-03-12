import React, { useState, useEffect } from 'react';
import '../../styles/jobapplications.css';
import axios from 'axios';
import config from '../../config';

const JobApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_applications`);
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching job applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleRemoveApplication = async (id) => {
    try {
      await axios.delete(`${config.backendUrl}/delete_application/${id}`);
      setApplications(applications.filter(job => job.id !== id));
    } catch (error) {
      console.error('Error removing job application:', error);
    }
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
              <h2>{application.job.title}</h2>
              <p>{application.job.employer}</p>
              <p>{application.job.location}</p>
              <p>{application.job.job_type}</p>
              <p>Date Applied: {new Date(application.application_date).toLocaleDateString()}</p>
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
