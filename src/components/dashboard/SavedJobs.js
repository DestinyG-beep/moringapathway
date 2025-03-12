import React, { useState } from 'react';

const SavedJobs = () => {
  const [savedJobs, _setSavedJobs] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      dateSaved: '2025-02-15',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'New York, NY',
      type: 'Part-time',
      dateSaved: '2025-02-10',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Data Systems',
      location: 'San Francisco, CA',
      type: 'Full-time',
      dateSaved: '2025-01-25',
    },
  ]);

  // Function to remove a saved job
  const handleRemove = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="saved-jobs">
      <h1>Saved Jobs</h1>
      <p>View and manage your saved jobs.</p>
      
      <div className="jobs-list">
        {savedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.jobTitle}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.type}</p>
            <p>Date Saved: {job.dateSaved}</p>
            <button>View Details</button>
            <button onClick={() => handleRemove(job.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
