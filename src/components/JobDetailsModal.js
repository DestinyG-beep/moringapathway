import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.employer}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Type:</strong> {job.job_type}</p>
        <p><strong>Posted:</strong> {new Date(job.date_posted).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Salary:</strong> ${job.salary_min} - ${job.salary_max}</p>
        <p><strong>Skills Required:</strong> {job.skills_required}</p>
        <p><strong>Benefits:</strong> {job.benefits}</p>
        <p><strong>Application Deadline:</strong> {new Date(job.application_deadline).toLocaleDateString()}</p>
        <div className="modal-buttons">
          <button className="apply-button">Apply Now</button>
          <button className="save-button">Save Job</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;