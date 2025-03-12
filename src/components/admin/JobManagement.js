import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get('/get_jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const deleteJob = async (jobId) => {
    try {
      await axiosInstance.delete(`/delete_job/${jobId}`);
      setJobs(jobs.filter((job) => job.id !== jobId));
      alert('Job deleted successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div className="job-management">
      <h1>Manage Jobs</h1>
      <p>View and manage job postings.</p>
      
      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.employer}</p>
            <p>{job.location}</p>
            <p>{job.job_type}</p>
            <p>Posted on: {new Date(job.date_posted).toLocaleDateString()}</p>
            <button>Edit</button>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobManagement;