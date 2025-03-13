import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/resources.css';
import ResourceDetailsModal from '../components/ResourceDetailsModal';
import config from '../config';

const ResourcesPage = () => {
  const { isPremium } = useAuth();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  const demoData = [
    {
      id: 1,
      title: 'Resume Guide',
      description: 'A comprehensive guide to creating a professional resume.',
      type: 'guide',
      url: "https://www.resumehelp.com/?utm_source=google&utm_campaign=317497369&utm_medium=cpc&utm_keyword=resume%20guide&adid=64278435769&utm_source=google&utm_medium=cpc&utm_keyword=resume%20guide&gad_source=1&gclid=EAIaIQobChMItremt_-GjAMViJJoCR35fhP9EAAYASAAEgKYL_D_BwE",
      isPremium: false,
    },
    {
      id: 2,
      title: 'Cover Letter Template',
      description: 'A template to help you write a compelling cover letter.',
      type: 'template',
      url: "https://www.myperfectcoverletter.com/lp/mpcrwzlp07.aspx?utm_source=google&utm_medium=sem&utm_campaign=20498128053&utm_term=cover%20letter%20template&network=g&device=c&adposition=&adgroupid=152552290029&placement=&adid=671887239766&gad_source=1&gclid=EAIaIQobChMIi_3yyveGjAMVTV1yCh3rtByMEAAYASAAEgItU_D_BwE",
      isPremium: false,
    },
    {
      id: 3,
      title: 'Interview Questions',
      description: 'Common interview questions and model answers.',
      type: 'guide',
      url: "https://www.brightermonday.co.ke/discover/how-to-answer-interview-questions?gad_source=1&gclid=EAIaIQobChMIuPPq1vSGjAMVmnJBAh0lDQdYEAAYAiAAEgIdbPD_BwE",
      isPremium: true,
    },
    {
      id: 4,
      title: 'Job Search Strategies',
      description: 'Effective strategies for finding job opportunities.',
      type: 'guide',
      url: "https://www.indeed.com/career-advice/finding-a-job/job-searching-strategies",
      isPremium: false,
    },
    {
      id: 5,
      title: 'Networking Tips',
      description: 'Tips for building and maintaining a professional network.',
      type: 'guide',
      url: "https://www.wix.com/blog/networking-101-your-complete-guide-to-master-your-networking-skills?utm_source=google&utm_medium=cpc&utm_campaign=21355409421^161138662017^search%20-%20dsa&experiment_id=^^701645202217^&gad_source=1&gclid=EAIaIQobChMIwZWxjviGjAMVAz8GAB3Z-BBQEAAYAyAAEgLspPD_BwE",
      isPremium: true,
    },
    {
      id: 6,
      title: 'Salary Negotiation',
      description: 'Guidelines for negotiating your salary effectively.',
      type: 'guide',
      url: "https://www.brightermonday.co.ke/discover/salary-negotiation?gad_source=1&gclid=EAIaIQobChMIguuOo_iGjAMVdwcGAB0pawqrEAAYAiAAEgLWGPD_BwE",
      isPremium: false,
    },
  ];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_job_resources`);
        setResources([...demoData, ...response.data]);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
        setResources(demoData); // Fallback to demo data in case of error
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter(resource => activeCategory === 'all' || resource.type === activeCategory);

  // Handle Upgrade Button Click (Redirects to Payment Page)
  const handleUpgradeClick = () => {
    navigate('/payment');
  };

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Career Resources</h1>
        <p>Access guides, templates, and tools to help you in your career journey</p>
      </div>
      
      {!isPremium && (
        <div className="premium-banner">
          <div className="premium-content">
            <h2>Upgrade to Premium</h2>
            <p>Get access to exclusive resources, interview questions with model answers, and more.</p>
            <button className="premium-button" onClick={handleUpgradeClick}>
              Upgrade Now
            </button>
          </div>
        </div>
      )}
      
      <div className="resources-filter">
        <button className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Resources</button>
        <button className={`filter-button ${activeCategory === 'guide' ? 'active' : ''}`} onClick={() => setActiveCategory('guide')}>Guides</button>
        <button className={`filter-button ${activeCategory === 'template' ? 'active' : ''}`} onClick={() => setActiveCategory('template')}>Templates</button>
      </div>
      
      <div className="resources-grid">
        {filteredResources.map(resource => (
          <div key={resource.id} className={`resource-card ${resource.isPremium ? 'premium' : ''}`} onClick={() => setSelectedResource(resource)}>
            <div className="resource-icon">
              <BookOpen size={24} />
            </div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            
            {resource.isPremium && !isPremium ? (
              <div className="premium-lock">
                <Lock size={25} />
                <span>Premium</span>
              </div>
            ) : (
              <a href={resource.url} className="resource-link">
                Access Resource
              </a>
            )}
          </div>
        ))}
      </div>

      <ResourceDetailsModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
    </div>
  );
};

export default ResourcesPage;
