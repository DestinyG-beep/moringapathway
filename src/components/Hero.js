import React from "react";
import styled from "styled-components";
import heroImage from "../assets/heros.png"; // Ensure this image is available

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Connecting Talent with Opportunity: Your Gateway to Career Success</h1>
        <p>Find jobs, track applications, and access career resources.</p>
        <ButtonContainer>
          <PrimaryButton href="/jobs">Explore Jobs</PrimaryButton>
          <SecondaryButton href="/dashboard">My Dashboard</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
      <HeroImage src={heroImage} alt="Career growth illustration" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  background: #f5f5f5;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;
  
  h1 {
    font-size: 2.5rem;
    color: #2a2a72;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin: 15px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const PrimaryButton = styled.a`
  padding: 12px 24px;
  background: #2a2a72;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s;
  
  &:hover {
    background: #ffcc00;
    color: #2a2a72;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: #2a2a72;
  border: 2px solid #2a2a72;
  
  &:hover {
    background: #2a2a72;
    color: white;
  }
`;

const HeroImage = styled.img`
  width: 45%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
  }
`;
