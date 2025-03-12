import React, { useState } from 'react';

const Resources = () => {
  const [resources] = useState([
    {
      id: 1,
      title: 'Resume Writing Guide',
      description: 'Learn how to craft a professional resume that stands out to employers.',
      type: 'Guide',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Prepare for common interview questions and techniques.',
      type: 'Guide',
      isPremium: false,
    },
    {
      id: 3,
      title: 'Technical Interview Questions',
      description: 'Common technical questions for software development roles with detailed answers.',
      type: 'Template',
      isPremium: true,
    },
  ]);

  return (
    <div className="resources-page">
      <h1>Resources</h1>
      <p>Access career resources and guides.</p>

      <div className="resources-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <p>Type: {resource.type}</p>
            <p>{resource.isPremium ? 'Premium' : 'Free'}</p>
            <button>Access Resource</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
