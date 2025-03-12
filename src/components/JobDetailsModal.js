import React, { useState } from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  const [isApplying, setIsApplying] = useState(false); // Toggle for the application form
  const [isSaved, setIsSaved] = useState(false); // Toggle for job save
  const [applicationMessage, setApplicationMessage] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  if (!job) return null;

  // Handle job saving
  const handleSaveJob = () => {
    setIsSaved(true);
    alert('Job saved successfully!');
  };

  // Handle application submission
  const handleSubmitApplication = (e) => {
    e.preventDefault();

    if (applicantName && applicantEmail && applicationMessage) {
      alert('Application submitted successfully!');
      setIsApplying(false);
      setApplicantName('');
      setApplicantEmail('');
      setApplicationMessage('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Posted:</strong> {job.posted}</p>
        <p><strong>Description:</strong> {job.description}</p>

        <div className="modal-buttons">
          <button 
            className={`apply-button ${isApplying ? 'cancel-button' : ''}`} 
            onClick={() => setIsApplying(!isApplying)}
          >
            {isApplying ? 'Cancel Application' : 'Apply Now'}
          </button>
          <button 
            className={`save-button ${isSaved ? 'saved' : ''}`} 
            onClick={handleSaveJob} 
            disabled={isSaved}
          >
            {isSaved ? 'Saved' : 'Save Job'}
          </button>
        </div>

        {isApplying && (
          <form className="application-form" onSubmit={handleSubmitApplication}>
            <h3>Application Form</h3>
            <div className="form-group">
              <label htmlFor="applicantName">Name:</label>
              <input
                type="text"
                id="applicantName"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="applicantEmail">Email:</label>
              <input
                type="email"
                id="applicantEmail"
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="applicationMessage">Message:</label>
              <textarea
                id="applicationMessage"
                value={applicationMessage}
                onChange={(e) => setApplicationMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-application-button">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JobDetailsModal;
