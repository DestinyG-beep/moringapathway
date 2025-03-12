import React from 'react';

const ResourceDetailsModal = ({ resource, onClose }) => {
  if (!resource) return null;

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{resource.title}</h2>
        <p><strong>Description:</strong> {resource.description}</p>
        <p><strong>Type:</strong> {resource.type}</p>
        <p><strong>URL:</strong> <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a></p>
        <div className="modal-buttons">
          <button className="access-button" onClick={() => window.open(resource.url, '_blank')}>Access Resource</button>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailsModal;