import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const MyApplications = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Data entry
  const applications = [
    { 
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Corp',
      status: 'Pending',
      dateApplied: '2025-02-15'
    },
    { 
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Web Solutions',
      status: 'Interview',
      dateApplied: '2025-02-10'
    },
    { 
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Data Systems',
      status: 'Rejected',
      dateApplied: '2025-01-25'
    }
  ];

  // Filter the applications based on status
  const filteredApplications = applications.filter(application => 
    statusFilter === 'all' || application.status.toLowerCase() === statusFilter
  );

  return (
    <div className="applications-page">
      <div className="applications-header">
        <h1>My Applications</h1>
        <div className="search-filter-container">
          <div className="search-box">
            <Search size={20} />
            <input type="text" placeholder="Search applications..." />
          </div>
          <div className="filter-box">
            <button onClick={() => setFilterOpen(!filterOpen)}>
              <Filter size={20} />
              <span>Filter</span>
              <ChevronDown size={20} />
            </button>
            {filterOpen && (
              <div className="filter-dropdown">
                <button onClick={() => setStatusFilter('all')}>All</button>
                <button onClick={() => setStatusFilter('pending')}>Pending</button>
                <button onClick={() => setStatusFilter('interview')}>Interview</button>
                <button onClick={() => setStatusFilter('rejected')}>Rejected</button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="applications-list">
        {filteredApplications.map(application => (
          <div key={application.id} className="application-card">
            <h2>{application.jobTitle}</h2>
            <p>{application.company}</p>
            <p>Status: {application.status}</p>
            <p>Date Applied: {application.dateApplied}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;