import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { MapPin, Clock, Star } from 'lucide-react';
import "../styles/jobs.css";
import JobDetailsModal from '../components/JobDetailsModal';

// Define the shape of a job object using JSDoc comments
/**
 * @typedef {Object} Job
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} location
 * @property {number} salary_min
 * @property {number} salary_max
 * @property {string} job_type
 * @property {string} skills_required
 * @property {string} benefits
 * @property {string} application_deadline
 * @property {string} employer
 * @property {string} employer_email
 * @property {string} employer_phone
 * @property {string} date_posted
 * @property {boolean} is_active
 */

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [salary, setSalary] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [jobType, setJobType] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState('');
  const [datePosted, setDatePosted] = useState('');

  // Demo data for jobs
  const demoJobs = [
    {
      id: 1,
      title: "Software Engineer",
      description: "We are looking for a skilled software engineer with expertise in Python, JavaScript, and cloud technologies.",
      location: "Remote",
      salary_min: 90000,
      salary_max: 120000,
      job_type: "Full-time",
      skills_required: "Python, JavaScript, Cloud Computing",
      benefits: "Health insurance, Paid vacation, Retirement plan",
      application_deadline: "2025-04-05T03:53:06Z",
      employer: "Tech Corp",
      employer_email: "hr@techcorp.com",
      employer_phone: "+1234567890",
      date_posted: "2025-02-15T03:53:06Z",
      is_active: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      description: "We are looking for a skilled frontend developer with expertise in React and CSS.",
      location: "New York, NY",
      salary_min: 80000,
      salary_max: 100000,
      job_type: "Part-time",
      skills_required: "React, CSS, JavaScript",
      benefits: "Health insurance, Paid vacation, Retirement plan",
      application_deadline: "2025-04-05T03:53:06Z",
      employer: "Web Solutions",
      employer_email: "hr@websolutions.com",
      employer_phone: "+1234567890",
      date_posted: "2025-02-10T03:53:06Z",
      is_active: true
    },
    {
      id: 3,
      title: "Backend Developer",
      description: "We are looking for a skilled backend developer with expertise in Node.js and databases.",
      location: "San Francisco, CA",
      salary_min: 85000,
      salary_max: 110000,
      job_type: "Full-time",
      skills_required: "Node.js, Databases, JavaScript",
      benefits: "Health insurance, Paid vacation, Retirement plan",
      application_deadline: "2025-04-05T03:53:06Z",
      employer: "Data Systems",
      employer_email: "hr@datasystems.com",
      employer_phone: "+1234567890",
      date_posted: "2025-01-25T03:53:06Z",
      is_active: true
    }
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_jobs`);
        setJobs([...demoJobs, ...response.data]);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs(demoJobs);
      }
    };

    fetchJobs();
  }, []);

  const handleSaveJob = (job) => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    if (!savedJobs.find(savedJob => savedJob.id === job.id)) {
      savedJobs.push(job);
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }
  };

  const handleApplyJob = (job) => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    if (!appliedJobs.find(appliedJob => appliedJob.id === job.id)) {
      appliedJobs.push(job);
      localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleJobTypeChange = (type) => {
    setJobType((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const handleExperienceLevelChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  const handleDatePostedChange = (e) => {
    setDatePosted(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.employer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || job.type === activeCategory;
    const matchesJobType = jobType.length === 0 || jobType.includes(job.job_type.toLowerCase());
    const matchesExperienceLevel = experienceLevel === '' || job.experience_level === experienceLevel;
    const matchesDatePosted = datePosted === '' || new Date(job.date_posted) >= new Date(Date.now() - parseInt(datePosted));
    const matchesSalary = salary === '' || (job.salary_min <= salary && job.salary_max >= salary);

    return matchesSearchTerm && matchesCategory && matchesJobType && matchesExperienceLevel && matchesDatePosted && matchesSalary;
  });

  return (
    <div className="jobs-page">
      <div className="sidebar">
        <h2>Search Jobs</h2>
        <input type="text" placeholder="Job title or company" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <div className="filter-section">
          <h3>Category</h3>
          <div>
            <input type="checkbox" id="commerce" name="category" value="commerce" onChange={() => handleCategoryChange('commerce')} />
            <label htmlFor="commerce">Commerce</label>
          </div>
          <div>
            <input type="checkbox" id="telecommunication" name="category" value="telecommunication" onChange={() => handleCategoryChange('telecommunication')} />
            <label htmlFor="telecommunication">Telecommunication</label>
          </div>
          <div>
            <input type="checkbox" id="education" name="category" value="education" onChange={() => handleCategoryChange('education')} />
            <label htmlFor="education">Education</label>
          </div>
        </div>

        <div className="filter-section">
          <h3>Job Type</h3>
          <div>
            <input type="checkbox" id="fulltime" name="jobType" value="fulltime" onChange={() => handleJobTypeChange('full-time')} />
            <label htmlFor="fulltime">Full-time</label>
          </div>
          <div>
            <input type="checkbox" id="parttime" name="jobType" value="parttime" onChange={() => handleJobTypeChange('part-time')} />
            <label htmlFor="parttime">Part-time</label>
          </div>
          <div>
            <input type="checkbox" id="freelance" name="jobType" value="freelance" onChange={() => handleJobTypeChange('freelance')} />
            <label htmlFor="freelance">Freelance</label>
          </div>
          <div>
            <input type="checkbox" id="seasonal" name="jobType" value="seasonal" onChange={() => handleJobTypeChange('seasonal')} />
            <label htmlFor="seasonal">Seasonal</label>
          </div>
          <div>
            <input type="checkbox" id="fixedprice" name="jobType" value="fixedprice" onChange={() => handleJobTypeChange('fixed-price')} />
            <label htmlFor="fixedprice">Fixed-price</label>
          </div>
        </div>

        <div className="filter-section">
          <h3>Experience Level</h3>
          <select onChange={handleExperienceLevelChange}>
            <option value="">All Levels</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Date Posted</h3>
          <select onChange={handleDatePostedChange}>
            <option value="">Anytime</option>
            <option value="86400000">Last 24 hours</option>
            <option value="604800000">Last 7 days</option>
            <option value="1209600000">Last 14 days</option>
            <option value="2592000000">Last 30 days</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Salary</h3>
          <input
            type="number"
            placeholder="Enter salary"
            value={salary}
            onChange={handleSalaryChange}
          />
        </div>
      </div>

      <div className="jobs-list-container">
        <h1>Jobs Available</h1>
        
        <div className="jobs-list">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <span className="font-bold text-gray-500">{job.employer.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.employer}</p>
                    <div className="job-details">
                      <span className="job-detail">
                        <MapPin size={14} className="mr-1" /> {job.location}
                      </span>
                      <span className="job-detail">
                        <Clock size={14} className="mr-1" /> {job.job_type}
                      </span>
                      <span className="job-detail">
                        <Star size={14} className="mr-1" /> Posted {new Date(job.date_posted).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <button className="apply-button" onClick={() => handleApplyJob(job)}>
                    Apply Now
                  </button>
                  <button className="save-button" onClick={() => handleSaveJob(job)}>
                    Save Job
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`modal-overlay ${selectedJob ? 'show' : ''}`}>
        <div className={`modal-content ${selectedJob ? 'show' : ''}`}>
          <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;