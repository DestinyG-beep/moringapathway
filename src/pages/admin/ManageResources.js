import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const ManageResources = () => {
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

  const deleteResource = async (resourceId) => {
    try {
      await axios.delete(`${config.backendUrl}/delete_job_resource/${resourceId}`);
      setResources(resources.filter((resource) => resource.id !== resourceId));
      alert('Resource deleted successfully');
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Resource Management</h3>
      <p className="mb-4">
        This page allows administrators to manage job-related resources. You can view, delete, and manage resources that are available to users. 
        Use the delete button to remove a resource from the list.
      </p>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className="mb-2">
            {resource.resource_name} - {resource.resource_type}
            <button 
              onClick={() => deleteResource(resource.id)}
              className="ml-2 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageResources;
