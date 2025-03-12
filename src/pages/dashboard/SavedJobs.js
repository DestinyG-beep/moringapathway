import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_saved_jobs`);
        setSavedJobs(response.data);
      } catch (error) {
        console.error('Error fetching saved jobs:', error);
      }
    };

    fetchSavedJobs();
  }, []);

  const handleRemoveJob = async (id) => {
    try {
      await axios.delete(`${config.backendUrl}/delete_saved_job/${id}`);
      setSavedJobs(savedJobs.filter(job => job.id !== id));
    } catch (error) {
      console.error('Error removing saved job:', error);
    }
  };

  return (
    <div className="saved-jobs">
      <h1>Saved Jobs</h1>
      <p>View and manage your saved jobs.</p>

      <div className="jobs-list">
        {savedJobs.length === 0 ? (
          <p>No saved jobs.</p>
        ) : (
          savedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.employer}</p>
              <p>{job.location}</p>
              <p>{job.job_type}</p>
              <p>Date Saved: {new Date(job.date_posted).toLocaleDateString()}</p>
              <button>View Details</button>
              <button onClick={() => handleRemoveJob(job.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
