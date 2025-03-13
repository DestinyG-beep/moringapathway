import React, { useState } from 'react';
import '../styles/premium.css';

const premiumResources = [
  {
    title: "Resume Writing Guide",
    content: `
1. Start with a Strong Header: Include your name, contact information, and LinkedIn profile link.
2. Professional Summary: Briefly describe your skills, experience, and career goals.
3. Work Experience: List your jobs in reverse chronological order, highlighting achievements and responsibilities.
4. Education: Include your degrees, institutions, and graduation dates.
5. Skills: Showcase relevant technical and soft skills.
6. Certifications: Mention any professional certifications.
7. Formatting Tips:
   - Use bullet points for clarity.
   - Keep it to one or two pages.
   - Use a professional font like Arial or Calibri.
   - Proofread to avoid typos and grammatical errors.
`,
    url: "https://www.example.com/resume-guide"
  },
  {
    title: "Interview Preparation",
    content: `
1. Research the Company: Understand their mission, vision, and values.
2. Practice Common Questions:
   - Tell me about yourself.
   - Why should we hire you?
   - Describe a challenging situation and how you handled it.
3. Prepare Questions to Ask: Show your interest in the role and company.
4. Dress Appropriately: Wear professional attire that matches the company culture.
5. Be Punctual: Arrive 10-15 minutes early.
6. Stay Confident: Maintain eye contact and speak clearly.
7. Follow Up: Send a thank-you email after the interview.
`,
    url: "https://www.example.com/interview-preparation"
  },
  {
    title: "Technical Interview Questions",
    content: `
1. Data Structures & Algorithms:
   - Explain the difference between an array and a linked list.
   - Implement a binary search algorithm.
2. Web Development:
   - What is CORS, and how do you handle it?
   - Explain the difference between GET and POST requests.
3. Database Management:
   - What is normalization?
   - How do you perform joins in SQL?
4. Behavioral Questions:
   - Describe a project you worked on and your role.
   - How do you handle tight deadlines?
`,
    url: "https://www.example.com/technical-interview-questions"
  },
  {
    title: "Salary Negotiation Tactics",
    content: `
1. Do Your Research: Know the average salary for the position in your area.
2. Highlight Your Value: Mention skills and achievements that make you a strong candidate.
3. Be Confident: Practice your negotiation pitch.
4. Consider the Whole Package: Take into account benefits, bonuses, and other perks.
5. Be Ready to Walk Away: Set a minimum acceptable offer.
6. Stay Positive: Be respectful and professional during negotiations.
`,
    url: "https://www.example.com/salary-negotiation-tactics"
  },
  {
    title: "Professional CV Template",
    content: `
[Your Name]
[Address]
[Phone Number]
[Email Address]
[LinkedIn Profile]

Professional Summary:
Dedicated and results-driven professional with over X years of experience in [Industry]. Proven ability to manage projects and deliver results. Skilled in [Skill 1], [Skill 2], and [Skill 3].

Experience:
Job Title - Company Name
Month Year - Month Year
- Key achievement or responsibility.
- Another key point.

Education:
Degree - University Name
Year of Graduation

Skills:
- Skill 1
- Skill 2
- Skill 3

Certifications:
- Certification Name - Institution - Year
`,
    url: "https://www.example.com/professional-cv-template"
  },
  {
    title: "LinkedIn Profile Optimization",
    content: `
1. Use a Professional Photo: A clear, friendly headshot with a simple background.
2. Write a Compelling Headline: Showcase your expertise and value.
3. Create a Strong Summary: Highlight your skills, achievements, and professional aspirations.
4. Add Experience: Detail your roles and responsibilities.
5. Showcase Skills: Add both technical and soft skills to your profile.
6. Get Endorsements and Recommendations: Build credibility by showcasing peer feedback.
7. Engage Regularly: Share relevant content and engage with your network.
`,
    url: "https://www.example.com/linkedin-profile-optimization"
  },
];

const PremiumPage = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const handleClose = () => {
    setSelectedResource(null);
  };

  return (
    <div className="premium-container">
      <h1 className="premium-title">Welcome to Premium Content</h1>
      <p className="premium-subtitle">Click on a resource to view its content:</p>
      <ul className="premium-list">
        {premiumResources.map((resource, index) => (
          <li
            key={index}
            className="premium-item"
            onClick={() => handleResourceClick(resource)}
          >
            {resource.title}
          </li>
        ))}
      </ul>

      {selectedResource && (
        <div className="modal-overlay show">
          <div className="modal-content show">
            <button className="close-button" onClick={handleClose}>X</button>
            <h2>{selectedResource.title}</h2>
            <pre className="resource-content">{selectedResource.content}</pre>
            <button className="find-out-more-button" onClick={() => window.open(selectedResource.url, '_blank')}>
              Find Out More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumPage;