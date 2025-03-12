import React, { useState } from 'react';
import '../../styles/jobapplications.css';
import ApplicationDetailsModal from '../../components/ApplicationDetailsModal';

const JobApplications = () => {
  const [applications] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Corp',
      status: 'Pending',
      dateApplied: '2025-02-15',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Web Solutions',
      status: 'Interview',
      dateApplied: '2025-02-10',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Data Systems',
      status: 'Rejected',
      dateApplied: '2025-01-25',
    },
  ]);

  const [selectedApplication, setSelectedApplication] = useState(null);

  return (
    <div className="job-applications">
      <h1>My Job Applications</h1>
      <p>View and manage your job applications.</p>
      
      <div className="applications-list">
        {applications.map((application) => (
          <div key={application.id} className="application-card">
            <h2>{application.jobTitle}</h2>
            <p>{application.company}</p>
            <p>Status: {application.status}</p>
            <p>Date Applied: {application.dateApplied}</p>
            <button onClick={() => setSelectedApplication(application)}>View Details</button>
          </div>
        ))}
      </div>

      <div className={`modal-overlay ${selectedApplication ? 'show' : ''}`}>
        <div className={`modal-content ${selectedApplication ? 'show' : ''}`}>
          <ApplicationDetailsModal application={selectedApplication} onClose={() => setSelectedApplication(null)} />
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
