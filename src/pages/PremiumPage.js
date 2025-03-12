import React from 'react';

const premiumResources = [
  "Resume Writing Guide",
  "Interview Preparation",
  "Technical Interview Questions",
  "Salary Negotiation Tactics",
  "Professional CV Template",
  "LinkedIn Profile Optimization"
];

const PremiumPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Premium Content</h1>
      <p>Enjoy your exclusive access to the following premium resources:</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {premiumResources.map((resource, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#f1f1f1",
              cursor: "pointer"
            }}
            onClick={() => alert(`You selected: ${resource}`)}
          >
            {resource}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PremiumPage;
