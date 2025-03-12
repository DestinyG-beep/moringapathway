import React from 'react';

const ApplicationDetailsModal = ({ application, onClose }) => {
  if (!application) return null;

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{application.jobTitle}</h2>
        <p><strong>Company:</strong> {application.company}</p>
        <p><strong>Status:</strong> {application.status}</p>
        <p><strong>Date Applied:</strong> {application.dateApplied}</p>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero bibendum tincidunt.</p>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;