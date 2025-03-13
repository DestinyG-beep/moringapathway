import React, { useState, useEffect } from 'react';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchSavedJobs = () => {
      const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
      setSavedJobs(savedJobs);
    };

    fetchSavedJobs();
  }, []);

  const handleRemoveJob = (id) => {
    const updatedSavedJobs = savedJobs.filter(job => job.id !== id);
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(updatedSavedJobs));
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
              
              <button onClick={() => handleRemoveJob(job.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
