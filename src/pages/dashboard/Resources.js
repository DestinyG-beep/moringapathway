import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_job_resources`);
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Access career resources and guides.</p>

      <div className="resources-list">
        {resources.length === 0 ? (
          <p>No resources available.</p>
        ) : (
          resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <p>Type: {resource.type}</p>
              <p>Size: {resource.size}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;
