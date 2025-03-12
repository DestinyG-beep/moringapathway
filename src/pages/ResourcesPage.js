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
      url: '#',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Cover Letter Template',
      description: 'A template to help you write a compelling cover letter.',
      type: 'template',
      url: '#',
      isPremium: false,
    },
    {
      id: 3,
      title: 'Interview Questions',
      description: 'Common interview questions and model answers.',
      type: 'guide',
      url: '#',
      isPremium: true,
    },
    {
      id: 4,
      title: 'Job Search Strategies',
      description: 'Effective strategies for finding job opportunities.',
      type: 'guide',
      url: '#',
      isPremium: false,
    },
    {
      id: 5,
      title: 'Networking Tips',
      description: 'Tips for building and maintaining a professional network.',
      type: 'guide',
      url: '#',
      isPremium: true,
    },
    {
      id: 6,
      title: 'Salary Negotiation',
      description: 'Guidelines for negotiating your salary effectively.',
      type: 'guide',
      url: '#',
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
