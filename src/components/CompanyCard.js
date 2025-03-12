import React from 'react';


const CompanyCard = ({ icon, name, description }) => {
  return (
    <div className="company-card">
      <div className="card-icon">
        <img src={icon} alt={name} />
      </div>
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CompanyCard;