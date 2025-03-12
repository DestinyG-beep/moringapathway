import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import jobData from "../data/jobs"; // Simulated job data

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const job = jobData.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <Container>
      <Header>
        <h1>{job.title}</h1>
        <p>{job.company} - {job.location}</p>
      </Header>
      <JobInfo>
        <Category>{job.category}</Category>
        <Type>{job.type}</Type>
        <Salary>{job.salary}</Salary>
      </JobInfo>
      <Description>{job.description}</Description>
      <ApplyButton>Apply Now</ApplyButton>
    </Container>
  );
};

export default JobDetails;

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  h1 {
    color: #2a2a72;
  }
  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

const JobInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Category = styled.span`
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Type = styled.span`
  background: #d1f7c4;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Salary = styled.span`
  background: #ffe0b2;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ApplyButton = styled.button`
  background: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  font-size: 1.2rem;
`;
