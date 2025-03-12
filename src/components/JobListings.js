import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Posted:</strong> {job.posted}</p>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero bibendum tincidunt.</p>
        <div className="modal-buttons">
          <button className="apply-button">Apply Now</button>
          <button className="save-button">Save Job</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;