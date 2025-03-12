import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Connecting Talent with Opportunity: Your Gateway to Career Success</h1>
        <p>Find jobs, track applications, and access exclusive career resources.</p>
        <Buttons>
          <a href="/jobs">Explore Jobs</a>
          <a href="/register" className="register-btn">Join Now</a>
        </Buttons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

// Styled Components
const HeroContainer = styled.section`
  background: url("/assets/hero-bg.jpg") no-repeat center center/cover;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    transition: 0.3s;
  }

  a:first-child {
    background: #007bff;
    color: white;
  }

  .register-btn {
    background: #ff5722;
    color: white;
  }

  a:hover {
    opacity: 0.8;
  }
`;
