import React from 'react';
import { FileText, Lock, Download, ExternalLink } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const UserResources = () => {
  const { isPremium } = useAuth();
  
  const resources = [
    {
      id: 1,
      title: 'Resume Writing Guide',
      description: 'Learn how to create a standout resume that gets you noticed by employers.',
      type: 'PDF',
      size: '2.4 MB',
      isPremium: false
    },
    {
      id: 2,
      title: 'Interview Preparation Checklist',
      description: 'A comprehensive checklist to help you prepare for job interviews.',
      type: 'PDF',
      size: '1.8 MB',
      isPremium: false
    },
    {
      id: 3,
      title: 'Technical Interview Questions',
      description: 'Common technical interview questions with detailed answers.',
      type: 'PDF',
      size: '3.2 MB',
      isPremium: true
    },
    {
      id: 4,
      title: 'Salary Negotiation Strategies',
      description: 'Effective strategies for negotiating your salary and benefits package.',
      type: 'PDF',
      size: '1.5 MB',
      isPremium: true
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Career Resources</h1>
      
      {!isPremium && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Upgrade to Premium</h2>
              <p className="mb-4">Get access to exclusive resources, interview questions, and personalized career guidance.</p>
              <ul className="list-disc list-inside mb-4">
                <li>50+ Premium resources</li>
                <li>Interview questions with model answers</li>
                <li>Resume templates</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Upgrade Now - KSh 5,000
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Available Resources</h2>
          <div className="flex space-x-2">
            <select className="border rounded px-3 py-1 text-sm">
              <option>All Types</option>
              <option>PDF</option>
              <option>Video</option>
              <option>Template</option>
            </select>
            <select className="border rounded px-3 py-1 text-sm">
              <option>All Resources</option>
              <option>Free Resources</option>
              <option>Premium Resources</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className={`border rounded-lg p-4 ${resource.isPremium && !isPremium ? 'bg-gray-50' : 'hover:shadow-md transition-shadow'}`}
            >
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                    {resource.isPremium && (
                      <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-xs text-gray-500">
                      {resource.type} • {resource.size}
                    </div>
                    {resource.isPremium && !isPremium ? (
                      <button className="flex items-center text-sm text-gray-500">
                        <Lock size={14} className="mr-1" />
                        Premium Only
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                          <Download size={14} className="mr-1" />
                          Download
                        </button>
                        <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                          <ExternalLink size={14} className="mr-1" />
                          View
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserResources;